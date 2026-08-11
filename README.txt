

CONCURRENT EDITING (v3 — field merge)
- Saves now send only the fields you changed, and the backend merges them into
  the sheet instead of replacing everything. Two people editing different
  deliverables at the same time no longer undo each other.
- Only editing the exact same field (same deliverable, same month, same
  attribute) as someone else within a second or two resolves last-write-wins.
- IMPORTANT: to activate this you must redeploy the Apps Script with the new
  google-apps-script.gs (Deploy -> Manage deployments -> edit -> Version:
  New version). The dashboard stays backward-compatible if you forget, but the
  merge only works once the v3 backend is live.
