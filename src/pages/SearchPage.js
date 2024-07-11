import React, { useState, useEffect } from "react";
import PatientList from "../components/patientList/patientList";
import AddPatientForm from "../components/form/form";

import "./Pages.css";

function SearchPage({ selectedPatient, setSelectedPatient, setCurrentPage }) {
  setCurrentPage("Search");
  return (
    <>
      <h1 className="title">Patients</h1>
      <PatientList selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />
    </>
  );
}

export default SearchPage;
