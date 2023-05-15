const axios = require("axios");
const newman = require("newman");
require("dotenv").config();

const fs = require("fs");
// Run the API tests using Newman
newman.run(
  {
    collection: require("./collection/Dmoney-Users-B6.postman_collection.json"), // pointing to local JSON file.
    iterationCount: 1,
    reporters: ["cli", "htmlextra"],
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
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
    //stats

    // Extract stats
    const { stats } = summary.run;

    const summaryf = `
     Total Requests:${stats.requests.total},
     Failed Requests:${stats.requests.failed},
     Total Assertions:${stats.assertions.total},
     Failed Assertion:${failures}
   
     `;

    // if (failures > 0) {
    //   console.log("I am From Summary......");
    //   // console.log(summary.run);
    //   const message = `:x: ${failures} API request(s) failed assertion in Postman collection \n
    //   ${summaryf}
    //   `;
    //   axios.post(process.env.DISCORD_URL, {
    //     content: message,
    //   });
    // } else {
    //   axios.post(process.env.DISCORD_URL, {
    //     content: "All API requests passed assertion in Postman collection",
    //   });

    // }

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
