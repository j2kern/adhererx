import express from "express";
import cors from "cors";
import { patientData } from "../data/patientData.mjs";

const app = express();
const n = 15;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const { q } = req.query;
  const keys = ["firstName", "lastName"]; // query keys
  const search = (data) => {
    // search function to return only queried items
    return data.filter((item) =>
      keys.some((key) => item[key] && typeof item[key] === "string" && item[key].toLowerCase().includes(q.toLowerCase()))
    );
  };
  console.log(q);
  res.json(search(patientData).slice(0, n)); // slice limits it to the first n items
});

app.post("/create-patient", (req, res) => {
  const { id, deviceId, firstName, lastName, sex, dob, date, pharmacist, regimen, minAdherence } = req.body;

  // Validate required fields
  if (
    !firstName ||
    !lastName ||
    !sex ||
    !dob ||
    !date ||
    !pharmacist ||
    !deviceId ||
    !id ||
    !Array.isArray(regimen) ||
    regimen.length === 0 ||
    !minAdherence
  ) {
    res
      .status(400)
      .contentType("application/json")
      .send(JSON.stringify({ error: "Invalid patient data" }));
  }

  // Validate each regimen entry
  const isRegimenValid = regimen.every((r) => {
    return (
      r.medication &&
      r.dose &&
      r.doseUnit &&
      Object.keys(r.schedule).every((day) => r.schedule[day].time !== "" && r.schedule[day].nPills !== 0)
    );
  });

  if (!isRegimenValid) {
    res
      .status(400)
      .contentType("application/json")
      .send(JSON.stringify({ error: "Invalid regimen data" }));
  }
  // Create new patient object
  const newPatient = {
    id,
    deviceId,
    firstName,
    lastName,
    sex,
    dob,
    date,
    pharmacist,
    regimen,
    minAdherence,
  };

  // Assuming patientData is an array in memory, but should be a database in production
  patientData.push(newPatient);
  res.status(201).json(newPatient);
});

app.listen(5001, () => console.log("API is working!"));
