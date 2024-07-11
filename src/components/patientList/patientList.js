import React, { useState, useEffect } from "react";
import { getSummaryStats } from "../../utils/utils";
import axios from "axios";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import { getAdherenceColour } from "../../utils/utils";
import IconLibrary from "../../utils/iconLibrary";
import "./patientList.css";

// List of patients component
// @param data: patientData
// @param selectedPatient: to highlight row / styling purposes
// @param handleRowSelect: setSelectedPatient
export const PatientTable = ({ data, selectedPatient, handleRowSelect }) => {
  const ErrorIcon = IconLibrary["errorIcon"];
  return (
    <table className="table">
      <tbody>
        <tr className="table__header">
          <th>Name</th>
          <th>Medication</th>
          <th>Adherence rate</th>
        </tr>
        {data.map((item) => (
          <tr
            key={item.id}
            className={`table__data ${selectedPatient && selectedPatient.id === item.id ? "selected" : ""}`}
            onClick={() => handleRowSelect(item)}
          >
            <th>
              {item.firstName} {item.lastName}
            </th>
            <th className="table_medication-list">
              {item.regimen.map((medicationEntry, index) => (
                <div key={index} className="table_medication">
                  {medicationEntry.medication}
                </div>
              ))}
            </th>
            <th>
              <div
                className="table__adherence-rate"
                style={{
                  color:
                    item.intakeData && getSummaryStats(item.intakeData).onTime.toFixed() < item.minAdherence
                      ? getAdherenceColour(0)
                      : getAdherenceColour(1),
                }}
              >
                {item.intakeData && getSummaryStats(item.intakeData).onTime.toFixed() < item.minAdherence ? <ErrorIcon /> : ""}{" "}
                {item.intakeData ? getSummaryStats(item.intakeData).onTime.toFixed() + "%" : "-"}
              </div>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Main list, returned to Search page
// Can update selectedPatient state
// Search functionality
// @param selectedPatient
// @param setSelectedPatient
const PatientList = ({ selectedPatient, setSelectedPatient }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleRowSelect = (patient) => {
    setSelectedPatient(patient);
    navigate("/demo");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5001?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]); // whenever query changes, re-fetch data

  return (
    <div>
      <div className="header">
        <input type="text" placeholder="Search patients..." className="patientlist__search" onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={() => navigate("/newpatient")} iconName="plusIcon">
          {" "}
          Add Patient
        </Button>
      </div>
      <PatientTable data={data} selectedPatient={selectedPatient} handleRowSelect={handleRowSelect} />
    </div>
  );
};

export default PatientList;

// inspiration from https://www.youtube.com/watch?v=MY6ZZIn93V8
