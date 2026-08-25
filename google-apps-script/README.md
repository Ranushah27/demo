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

## Payment tracking (for Chef Maddy)

The website only ever collects a *budget range* as a guide — it never quotes
or charges a final price, since that's something Chef Maddy agrees with each
customer individually over WhatsApp. So payment tracking isn't a form field;
it's a handful of extra columns on the same Sheet, in the same row as that
customer's enquiry, that Chef Maddy fills in himself once a deal is done:

**Deal Status, Final Price Agreed (RM), Payment Method, Amount Paid (RM),
Balance Due (RM), Payment Date, Payment Notes**

Workflow: a customer's enquiry always lands as a new row automatically.
Once Chef Maddy agrees a final price and the customer pays (QR/DuitNow, bank
transfer, cash, whatever), he finds that same row (easy to spot by name and
date) and fills in those columns by hand.

**One-time setup** for the nice-to-haves (dropdown lists + colour
highlighting so unpaid deals stand out): after pasting the latest `Code.gs`
and redeploying, in the Apps Script editor pick **setupPaymentTracking** from
the function dropdown at the top and click **Run**. Authorize it if asked.
This is safe to re-run any time — for example once you've gone past row 1000
and want the dropdowns/highlighting extended further down.

## Notes

- If you ever change the form's questions, update `HEADERS` in `Code.gs` and
  redeploy (**Deploy → Manage deployments → edit → New version**) to match.
- The site sends this request in the background and never blocks or fails
  the enquiry flow if the sheet is unreachable — it's a best-effort log, not
  a required step for the customer.
- To see the data: just open the Google Sheet. You can filter, sort, export
  to CSV, or connect it to anything else (Zapier, Make, etc.) later.
