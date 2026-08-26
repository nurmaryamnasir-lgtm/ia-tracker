# Deployment Checklist

This project is a static dashboard for IA deliverables, SLA tracking, and team workload reporting. It depends on a Google Apps Script backend for shared editing and persistence.

## 1. Pre-deployment

- [ ] Confirm the project is the intended production version.
- [ ] Review the dashboard content in [index.html](index.html) and confirm branding, report names, and team assignments are correct.
- [ ] Review [config.js](config.js) and ensure the App Script endpoint is correct for the target environment.
- [ ] Confirm the production backend is deployed and the sheet exists.
- [ ] Confirm the target Google Sheet has a tab named `DashboardState`.
- [ ] Confirm you are ready to redeploy the Apps Script when backend logic changes.

## 2. Google Apps Script setup

- [ ] Open Google Apps Script.
- [ ] Paste the contents of [google-apps-script.gs](google-apps-script.gs).
- [ ] Save the project.
- [ ] Ensure the spreadsheet connected to the script contains the `DashboardState` sheet.
- [ ] Deploy as a Web App.
- [ ] Set access to `Anyone` or `Anyone with the link` depending on your sharing policy.
- [ ] Copy the `/exec` URL.
- [ ] Paste it into `SHEETS_API_URL` in [config.js](config.js).
- [ ] Redeploy after any backend logic change so the new version is active.

## 3. Static hosting

- [ ] Upload the site to a static host such as GitHub Pages, Netlify, Cloudflare Pages, or a static S3 bucket.
- [ ] Ensure the root directory contains the proper files.
- [ ] Confirm that [index.html](index.html) loads from the root URL.
- [ ] If using a custom domain, confirm DNS and SSL configuration are complete.
- [ ] Verify the custom domain is recorded in [CNAME.txt](CNAME.txt) if applicable.
- [ ] Confirm HTTPS is enabled.

## 4. Runtime validation

- [ ] Open the production site in a browser.
- [ ] Confirm the page loads without a blank screen or missing resources.
- [ ] Confirm the theme loads correctly.
- [ ] Confirm filters, tabs, and month navigation work as expected.
- [ ] Create or update a deliverable item.
- [ ] Save the change.
- [ ] Refresh the page.
- [ ] Confirm the saved change persists.
- [ ] Open a second browser or private window.
- [ ] Verify the same data is visible.
- [ ] Confirm that the service still works when `SHEETS_API_URL` is empty for local-only mode.

## 5. Regression and safety checks

- [ ] Check the browser console for JavaScript errors.
- [ ] Confirm no secret or private credentials are hardcoded in client files.
- [ ] Confirm the app still works on a smaller screen.
- [ ] Confirm no broken links or missing CSS assets are present.
- [ ] Test a save failure scenario and verify the UI still behaves safely.
- [ ] Confirm team members know the fallback local-only behavior if the backend is unavailable.

## 6. Launch runbook

1. Deploy the Apps Script backend.
2. Confirm the sheet is writable.
3. Set the production URL in [config.js](config.js).
4. Publish the static frontend.
5. Validate live editing in browser.
6. Share the public URL with the team.
7. Monitor the first few saves for issues.

## 7. Rollback plan

- [ ] Keep a previous static build ready.
- [ ] Keep the previous Apps Script deployment available.
- [ ] If the production deployment fails, revert to the last known-good static site.
- [ ] If backend logic breaks, restore the previous Apps Script deployment and re-point the URL.
- [ ] Confirm the team knows how to switch back to local-only mode temporarily if needed.

## 8. Final sign-off

- [ ] Production URL is live and accessible.
- [ ] Backend is deployed and working.
- [ ] Team can save and reload data successfully.
- [ ] All priority QA checks pass.
- [ ] Launch is documented and rollback is prepared.
