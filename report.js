const axios = require("axios");
const newman = require("newman");
require("dotenv").config();
const mkdirp = require("mkdirp");

const fs = require("fs");

// Specify the export path for the HTML report
const exportPath = "./Reports/report.html";

// Create the necessary directories if they don't exist
mkdirp.sync("./Reports");

// Run the API tests using Newman
newman.run(
  {
    collection: require("./collection/Dmoney-Users-B6.postman_collection.json"), // pointing to local JSON file.
    iterationCount: 1,
    reporters: ["cli", "htmlextra"],
    reporter: {
      htmlextra: {
        export: exportPath,
      },
    },
  },
  async function (err, summary) {
    if (err) {
      // console.log("I am From Error!!!.............");
      // console.error(err);
      // process.exit(1);
    }

    // Check if any test has failed
    const failures = summary.run.failures.length;

    // Extract stats
    const { stats } = summary.run;

    const summaryf = `
     Total Requests:${stats.requests.total},
     Failed Requests:${stats.requests.failed},
     Total Assertions:${stats.assertions.total},
     Failed Assertion:${failures}
   
     `;

    try {
      if (failures > 0) {
        const message = `:x: ${failures} API request(s) failed assertion in Postman collection \n\n${summaryf}`;
        await axios.post(process.env.DISCORD_URL, {
          content: message,
        });
      } else {
        await axios.post(process.env.DISCORD_URL, {
          content: "All API requests passed assertion in Postman collection",
        });
      }
      console.log("Discord message sent successfully");
    } catch (error) {
      console.error("Error sending Discord message:", error);
    }
  }
);
