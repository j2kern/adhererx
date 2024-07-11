import React, { useEffect } from "react";
import Form from "../components/form/form";
import "./Pages.css";

function AddPatientPage({ setCurrentPage }) {
  setCurrentPage("addPatientPage");
  return (
    <div>
      <div className="header">
        <h1 className="title">Add New Patient</h1>
      </div>
      <Form />
    </div>
  );
}
export default AddPatientPage;
