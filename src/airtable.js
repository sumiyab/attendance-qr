var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyqmKcScZuBH8W1u" }).base(
  "app6Dk6VNBF2hNU9s"
);

const table = base("Attendence");

export const getRecords = async () => {
  await table
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          console.log("Retrieved", record.get("Name"));
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};

const createRecord = async (fields) => {
  const createRecord = await table.create(fields);
  console.log(createRecord);
};
createRecord({
  Name: "Sumya",
  Ирц: "ирсэн",
  "Он сар": "2022-03-25",
  Class: "HOP1C",
});
