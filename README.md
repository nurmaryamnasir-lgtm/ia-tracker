# IA Tracker Dashboard

A static internal dashboard for the Zanroo Malaysia Insight Analysts team to track report deliverables, deadlines, SLA health, and workload.

## Run locally

```bash
npm start
```

Then open http://localhost:8000. If that port is busy, run `python3 -m http.server 8124`.

## Project files

- `index.html` - dashboard UI
- `config.js` - Google Apps Script endpoint configuration
- `google-apps-script.gs` - Google Sheets persistence backend
- `DEPLOYMENT.md` - launch and rollback checklist
- `scripts/build-check.js` - static build validation
- `scripts/smoke-test.js` - local HTTP smoke test

## Verification

```bash
npm test
npm run build
```

The dashboard falls back to local browser storage when `SHEETS_API_URL` is empty. Shared editing requires the deployed `/exec` URL in `config.js`.
