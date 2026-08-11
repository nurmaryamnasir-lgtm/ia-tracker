// ═══════════════════════════════════════════════════════════════════════════
// IA TEAM DASHBOARD — CONFIGURATION
//
// This is the ONLY file you need to edit when deploying a new version of
// index.html. Keep your copy of this file; overwrite index.html freely.
// ═══════════════════════════════════════════════════════════════════════════

window.IA_CONFIG = {

  // Google Apps Script Web App URL (ends with /exec).
  // Leave empty ('') to run in local-only mode — saves to this browser only.
  SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbySjuRH-p7GoxMe9tUw6VPemdVAMA99gg5OA-KFTqnY2vznS6wxLt6JQUySb3J1lbqCDw/exec',

  // How often (seconds) to check the Sheet for teammates' changes.
  POLL_SECONDS: 60,

  // Optional: your name. Shows in the sync tooltip as "last edit by ___"
  // so the team can see who most recently changed something.
  EDITOR_NAME: ''

};
