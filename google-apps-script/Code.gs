// Maddy Cooks — enquiry logger.
// Paste this into a Google Sheet's Extensions > Apps Script editor, then
// deploy as a Web App (see README.md in this folder for step-by-step setup).
// Every submitted enquiry becomes one new row in the active sheet.

var HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "WhatsApp",
  "Date",
  "Time",
  "Location",
  "Map Link",
  "Guests",
  "Occasion",
  "Preferred Proteins",
  "Avoided Proteins",
  "Cuisine",
  "Spice Level",
  "Dietary Requirements",
  "Allergies",
  "Ingredients to Avoid",
  "Dining Style",
  "Courses",
  "Budget",
  "Additional Notes",
  "Inspiration Image",
  // Everything from here on is never written by the form — Chef Maddy fills
  // these in by hand once he's agreed a final price with the customer over
  // WhatsApp, since that price only exists after his own negotiation.
  "Deal Status",
  "Final Price Agreed (RM)",
  "Payment Method",
  "Amount Paid (RM)",
  "Balance Due (RM)",
  "Payment Date",
  "Payment Notes",
];

// Options for the Deal Status / Payment Method dropdowns set up by
// setupPaymentTracking() below.
var DEAL_STATUS_OPTIONS = ["New", "Quoted", "Confirmed", "Deposit Paid", "Fully Paid", "Cancelled"];
var PAYMENT_METHOD_OPTIONS = ["QR / DuitNow", "Bank Transfer", "Cash", "Card", "Other"];

// Background colour shown for each Deal Status value, so unpaid/pending
// deals are visible at a glance without opening every row.
var DEAL_STATUS_COLORS = {
  "New": "#f9d5d3",
  "Quoted": "#fbe3c4",
  "Confirmed": "#fdf3c0",
  "Deposit Paid": "#cfe3fb",
  "Fully Paid": "#d3f0d8",
  "Cancelled": "#e2e2e2",
};

// Resolves a single-select "Other" answer to the free text the guest typed.
function resolveOther(value, otherText) {
  return value === "Other" && otherText ? otherText : value;
}

// Same idea for a multi-select list.
function resolveOtherList(values, otherText) {
  values = values || [];
  if (!otherText || values.indexOf("Other") === -1) return values;
  return values.map(function (v) {
    return v === "Other" ? otherText : v;
  });
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  var mapLink =
    data.locationLat != null && data.locationLng != null
      ? "https://www.google.com/maps?q=" + data.locationLat + "," + data.locationLng
      : "";

  // Only the enquiry columns are written here — the payment-tracking columns
  // (Deal Status onward) are left blank for Chef Maddy to fill in later.
  sheet.appendRow([
    new Date(),
    data.fullName,
    data.email,
    data.whatsapp,
    data.date,
    data.time,
    data.location,
    mapLink,
    data.guests,
    resolveOther(data.occasion, data.occasionOther),
    (data.proteins || []).join(", "),
    data.avoidProteins,
    resolveOther(data.cuisine, data.cuisineOther),
    data.spiceLevel,
    resolveOtherList(data.dietary, data.dietaryOther).join(", "),
    data.allergies,
    data.dislikedIngredients,
    data.diningStyle,
    data.courses,
    data.budget,
    data.notes,
    data.inspirationImageName,
  ]);

  return ContentService.createTextOutput(JSON.stringify({ result: "success" })).setMimeType(
    ContentService.MimeType.JSON,
  );
}

// Run this ONCE from the Apps Script editor (select it in the function
// dropdown at the top, then click Run) after pasting/updating this code.
// It adds dropdown lists for Deal Status and Payment Method, plus colour
// highlighting for Deal Status, to rows 2–1000 — including rows that don't
// have any enquiry data yet, so every future enquiry already has them.
// Safe to re-run any time (e.g. once you're past row 1000).
function setupPaymentTracking() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var statusCol = HEADERS.indexOf("Deal Status") + 1;
  var methodCol = HEADERS.indexOf("Payment Method") + 1;
  var numRows = 999; // covers rows 2–1000

  var statusRange = sheet.getRange(2, statusCol, numRows, 1);
  statusRange.setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(DEAL_STATUS_OPTIONS, true).setAllowInvalid(false).build(),
  );

  var methodRange = sheet.getRange(2, methodCol, numRows, 1);
  methodRange.setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(PAYMENT_METHOD_OPTIONS, true).setAllowInvalid(false).build(),
  );

  var rules = sheet.getConditionalFormatRules().filter(function (rule) {
    // Keep any rules on other ranges (e.g. ones added manually later);
    // drop only rules this function previously set on the status column.
    return rule.getRanges().every(function (r) {
      return r.getColumn() !== statusCol;
    });
  });

  DEAL_STATUS_OPTIONS.forEach(function (status) {
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo(status)
        .setBackground(DEAL_STATUS_COLORS[status])
        .setRanges([statusRange])
        .build(),
    );
  });

  sheet.setConditionalFormatRules(rules);

  SpreadsheetApp.getUi().alert(
    "Payment tracking is set up: Deal Status and Payment Method now have dropdown lists, and Deal Status rows " +
      "will highlight by colour.",
  );
}
