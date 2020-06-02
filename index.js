// create a file called .env with contents:
// SFUSERNAME=user@domain.com
// SFPASSWORD=password123

const jsforce = require("jsforce");
require("dotenv").config();

const sfusername = process.env.SFUSERNAME || process.exit(1);
const sfpassword = process.env.SFPASSWORD || process.exit(1);

var conn = new jsforce.Connection();

conn.login(sfusername, sfpassword, function (err, res) {
  if (err) {
    return console.error(err);
  }

  console.log("Subscribing to change events");

  conn.streaming.topic("/data/ChangeEvents").subscribe(function (message) {
    console.log("Change: " + JSON.stringify(message, null, 2));
  });
});
