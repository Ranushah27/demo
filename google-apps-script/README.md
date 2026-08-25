# Logging enquiries to a Google Sheet

Every "Send My Dining Request" submission on the site can append a row to a
Google Sheet you own, so Chef Maddy has a full, permanent history of every
enquiry — independent of whether the customer completes the WhatsApp step.

This uses a free Google Apps Script Web App as the receiving endpoint — no
paid hosting or database needed.

## Setup (5 minutes, one-time)

1. Create a new Google Sheet (e.g. "Maddy Cooks Enquiries").
2. In the Sheet, go to **Extensions → Apps Script**.
3. Delete the placeholder code and paste in the contents of `Code.gs` from
   this folder.
4. Click **Deploy → New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Description: anything, e.g. "Enquiry logger".
   - Execute as: **Me**.
   - Who has access: **Anyone**.
   - Click **Deploy**, and authorize the script when prompted (it's your own
     script acting on your own sheet).
5. Copy the **Web app URL** it gives you (ends in `/exec`).
6. Paste that URL into `src/config/site.ts` as `ENQUIRY_SHEET_WEBHOOK_URL`.

That's it — the header row is created automatically on the first submission,
and every enquiry after that appends as a new row.

## Notes

- If you ever change the form's questions, update `HEADERS` in `Code.gs` and
  redeploy (**Deploy → Manage deployments → edit → New version**) to match.
- The site sends this request in the background and never blocks or fails
  the enquiry flow if the sheet is unreachable — it's a best-effort log, not
  a required step for the customer.
- To see the data: just open the Google Sheet. You can filter, sort, export
  to CSV, or connect it to anything else (Zapier, Make, etc.) later.
