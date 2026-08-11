// ═══════════════════════════════════════════════════════════════════════════
// IA TEAM DASHBOARD — GOOGLE SHEETS BACKEND (v3, field-merge)
//
// Paste this whole file into Apps Script (Extensions → Apps Script) on your
// Google Sheet, then Deploy → Manage deployments → edit → Version: New version.
//
// v3 change: doPost now MERGES the incoming state into what's already stored,
// per-field, instead of replacing the whole document. Two people editing
// different deliverables at the same time no longer overwrite each other even
// if their saves arrive within the same second.
//
// The client sends only the keys it actually changed (in a "_dirty" manifest),
// so the server knows which fields to overwrite and which to leave alone.
// ═══════════════════════════════════════════════════════════════════════════

const SHEET_NAME = 'DashboardState';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  return sh;
}

function readState_(sh) {
  const data = sh.getDataRange().getValues();
  const state = {};
  for (let i = 0; i < data.length; i++) {
    const key = data[i][0];
    if (!key) continue;
    const chunks = data[i].slice(1).filter(function (c) { return c !== '' && c !== null; });
    try { state[key] = JSON.parse(chunks.join('')); } catch (e) {}
  }
  return state;
}

function writeState_(sh, state) {
  sh.clearContents();
  const rows = [];
  const CHUNK = 45000;
  Object.keys(state).forEach(function (key) {
    const json = JSON.stringify(state[key]);
    const row = [key];
    for (let i = 0; i < json.length; i += CHUNK) row.push(json.substring(i, i + CHUNK));
    rows.push(row);
  });
  const maxCols = Math.max.apply(null, rows.map(function (r) { return r.length; }));
  rows.forEach(function (r) { while (r.length < maxCols) r.push(''); });
  sh.getRange(1, 1, rows.length, maxCols).setValues(rows);
}

// Per-key map collections that merge field-by-field.
const MAP_COLLECTIONS = ['PROGRESS','REMARKS','DATE_OVERRIDES','MASTER_SLA_OVERRIDE','DONE_AT','MONTH_HIDDEN','HISTORY'];
// Whole-value collections replaced only when the sender marked them dirty.
const BIG_COLLECTIONS = ['MASTER','MONTH_ADHOC','DS_ITEMS','ALL_IAS','BIRTHDAYS','MASTER_BLOCKED','SAVED_VIEWS'];

function doGet() {
  const state = readState_(getSheet_());
  return ContentService.createTextOutput(JSON.stringify(state))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const incoming = JSON.parse(e.postData.contents);
    const sh = getSheet_();
    const current = readState_(sh);
    const dirty = incoming._dirty || null;

    // If no dirty manifest (older client), fall back to whole-document replace
    // with version check — preserves old behaviour safely.
    if (!dirty) {
      const sv = Number(current.version) || 0;
      const iv = Number(incoming.version) || 0;
      if (iv <= sv && sv > 0) {
        return json_({ ok:false, conflict:true, serverVersion:sv, editor:current.editor||'' });
      }
      writeState_(sh, incoming);
      return json_({ ok:true, version:iv });
    }

    // ── Field-level merge ──
    const merged = current && Object.keys(current).length ? current : {};

    // Map collections: apply only the keys this client marked dirty.
    MAP_COLLECTIONS.forEach(function (coll) {
      const dkeys = (dirty.keys && dirty.keys[coll]) || [];
      if (!dkeys.length) return;
      if (!merged[coll] || typeof merged[coll] !== 'object') merged[coll] = {};
      const src = incoming[coll] || {};
      dkeys.forEach(function (k) {
        if (Object.prototype.hasOwnProperty.call(src, k)) merged[coll][k] = src[k];
        else delete merged[coll][k]; // key was deleted locally (e.g. restore)
      });
    });

    // Big collections: replace wholesale only if sender changed them.
    BIG_COLLECTIONS.forEach(function (coll) {
      if (dirty.big && dirty.big.indexOf(coll) !== -1 && incoming[coll] !== undefined) {
        merged[coll] = incoming[coll];
      }
    });

    // Always carry the simple metadata fields forward.
    merged.version = (Number(current.version) || 0) + 1;
    merged.editor  = incoming.editor || merged.editor || '';
    merged.savedAt = new Date().toISOString();

    writeState_(sh, merged);
    return json_({ ok:true, version:merged.version, merged:true });

  } catch (err) {
    return json_({ ok:false, error:String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
