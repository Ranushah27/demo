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
];

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
