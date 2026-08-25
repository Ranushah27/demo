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
  "Guests",
  "Occasion",
  "Preferred Proteins",
  "Avoided Proteins",
  "Cuisine",
  "Spice Level",
  "Adventure Level",
  "Dietary Requirements",
  "Allergies",
  "Ingredients to Avoid",
  "Dining Style",
  "Courses",
  "Budget",
  "Additional Notes",
  "Inspiration Image",
];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  sheet.appendRow([
    new Date(),
    data.fullName,
    data.email,
    data.whatsapp,
    data.date,
    data.time,
    data.location,
    data.guests,
    data.occasion,
    (data.proteins || []).join(", "),
    data.avoidProteins,
    data.cuisine,
    data.spiceLevel,
    data.adventureLevel,
    (data.dietary || []).join(", "),
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
