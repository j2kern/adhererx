import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import IconLibrary from "../../utils/iconLibrary";
import "./navbar.css";

// Header navigation
// @param object: selectedPatient
// @param string: curentPage
const NavigationBar = ({ selectedPatient, currentPage }) => {
  const BackChevronIcon = IconLibrary["backChevronIcon"];
  return (
    <Navbar className="navbar" bg="transparent">
      <Nav className="navbar__section">
        <Link to="/" className="navbar__brand">
          AdhereRx
        </Link>

        {(currentPage === "adherencePage" ||
          currentPage === "addPatientPage") && (
          <Link to="/" className="navbar__icontext">
            <BackChevronIcon /> Back
          </Link>
        )}
      </Nav>
      {selectedPatient && currentPage === "adherencePage" && (
        <Link to="/demo" className="navbar__icontext">
          {selectedPatient.firstName} {selectedPatient.lastName} -
          {selectedPatient.regimen.map((regimenEntry, index) => (
            <span key={index} className="navbar__tag">
              {regimenEntry.medication}
              {index < selectedPatient.regimen.length - 1 ? ", " : ""}
            </span>
          ))}
        </Link>
      )}

      <Nav className="navbar__section">
        <Link to="/">Patient List</Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
