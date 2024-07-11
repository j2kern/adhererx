import { ArduinoIoTCloud } from "arduino-iot-js";
import mysql from "mysql";

const thingId = "3371b5db-5614-4c48-acdb-9d8be602ecec";
const deviceId = "a5c6f2d3-5cb1-4247-9809-62c27af6a5fd";
const variableName = "compartmentStates";

// Arduino Cloud API Info
const options = {
  clientId: "",
  clientSecret: "",
  onDisconnect: (message) => {
    console.error(message);
  },
};

// Connect to MySQL first
const con = await mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

(async () => {
  const client = await ArduinoIoTCloud.connect(options);
  console.log("Connected to Arduino Cloud!");
  console.log("attempting to get " + variableName);
  client.onPropertyValue(thingId, variableName, (value) => {
    // Upload value to MySQL database
    var sql =
      "INSERT INTO event_data (device_id, thing_id, sunday_status, monday_status, tuesday_status, wednesday_status, thursday_status, friday_status, saturday_status, compartment_change, event_timestamp) VALUES('" +
      deviceId +
      "', '" +
      thingId +
      "'," +
      value +
      ", NOW())";
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, row: " + variableName, +value);
    });
  });
})();
