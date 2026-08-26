# IA Tracker Dashboard

A static internal reporting dashboard for team IA deliverables, SLA visibility, and month-based planning.

## Project structure

- `index.html` — main dashboard UI
- `config.js` — deployment configuration for the Google Apps Script endpoint
- `google-apps-script.gs` — Apps Script backend for saving state to Google Sheets
- `CNAME.txt` — optional custom domain configuration

## Local run

```bash
npm start
```

Then open http://localhost:8000 in a browser.

## Notes

- The dashboard can run locally without the backend by leaving `SHEETS_API_URL` empty in `config.js`.
- For shared team editing, deploy the Apps Script in `google-apps-script.gs` and paste the `/exec` URL into `config.js`.
- The Apps Script uses a field-level merge strategy to reduce overwrites during concurrent edits.
