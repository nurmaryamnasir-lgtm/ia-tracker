# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The Insight Analysts team uses the dashboard while writing and delivering reports. They need a shared view of deliverables, reporting cycles, deadlines, and ownership.

## Product Purpose

The dashboard provides month-based reporting visibility and informs the team about upcoming and overdue deadlines. It supports shared updates backed by Google Sheets, including field-level merging for concurrent edits.

## Capabilities and Constraints

- The product is a static web dashboard.
- It tracks report deliverables, statuses, due dates, remarks, projects, calendars, data submissions, and workload.
- Shared persistence uses a Google Apps Script backend connected to Google Sheets.
- The dashboard must preserve local-only fallback behavior when the backend URL is unavailable or empty.
- Existing Zanroo Malaysia branding and the current operational dashboard workflows are product constraints.

## Brand Commitments

- Product name: Zanroo Malaysia IA Team Dashboard.
- The interface should support practical, clear internal reporting work.

## Evidence on Hand

- Main dashboard implementation: `index.html`
- Frontend configuration: `config.js`
- Google Sheets backend: `google-apps-script.gs`
- Deployment checklist: `DEPLOYMENT.md`

## Product Principles

- Make reporting deadlines visible at a glance.
- Keep ownership and status easy to update.
- Preserve shared edits during concurrent team work.
- Keep the dashboard useful when cloud sync is unavailable.

## Accessibility & Inclusion

The dashboard should remain usable with keyboard navigation, responsive layouts, visible focus states, and clear status communication.
