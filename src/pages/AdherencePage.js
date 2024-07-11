import React, { useEffect, useState } from "react";
import Calendar from "../components/calendar/calendar";
import SummaryStats from "../components/summaryStats/summaryStats";
import WeeklyStats from "../components/weeklyStats/weeklyStats";
import LineChart from "../components/linechart/linechart";

import IconLibrary from "../utils/iconLibrary";
import { getSummaryStats, getAdherenceColour } from "../utils/utils";

import "./Pages.css";

function AdherencePage({ selectedPatient, isAdherent, setIsAdherent, setCurrentPage }) {
  setCurrentPage("adherencePage");
  if (selectedPatient) {
    const firstName = selectedPatient.firstName;
    const lastName = selectedPatient.lastName;
    const deviceId = selectedPatient.deviceId;
    const dob = selectedPatient.dob;
    const events = selectedPatient.intakeData; // intake events
    const regimen = selectedPatient.regimen;
    const medicationDetails = selectedPatient.regimen
      ? selectedPatient.regimen.map((regimenEntry) => `${regimenEntry.medication} (${regimenEntry.dose}${regimenEntry.doseUnit})`)
      : [];
    const threshold = selectedPatient.regimen.threshold; // hours (+/- prescribed time)
    const minAdherence = selectedPatient.minAdherence;

    const summaryAdherence = getSummaryStats(events).onTime.toFixed();
    if (summaryAdherence >= minAdherence) setIsAdherent(1);
    else setIsAdherent(0);
    const adherenceColor = getAdherenceColour(isAdherent);
    const emptyState = events === undefined ? 1 : 0;

    // Icon Imports
    const ErrorIcon = IconLibrary["errorIcon"];
    const CheckIcon = IconLibrary["checkIcon"];
    const PillIcon = IconLibrary["pillIcon"];
    const BarChartIcon = IconLibrary["barChartIcon"];
    const LineChartIcon = IconLibrary["lineChartIcon"];
    const CalendarIcon = IconLibrary["calendarIcon"];

    return (
      <>
        <div className="header">
          <h1 className="title">
            {firstName} {lastName}
          </h1>
          <div className="adherencepage__summaryadherence">
            {emptyState ? (
              "-"
            ) : (
              <div className="adherencepage__summaryadherence" style={{ color: `${adherenceColor}` }}>
                {isAdherent === 0 ? <ErrorIcon /> : <CheckIcon />}
                {summaryAdherence}% Adherent
              </div>
            )}
          </div>
        </div>
        <div className="adherencepage__info">
          <div className="adherencepage__info-display">
            <p>
              <span className="adherencepage__bold-info">Name: </span>
              {firstName} {lastName}
            </p>
            <p>
              <span className="adherencepage__bold-info">Date of Birth: </span>
              {dob}
            </p>
            <p>
              <span className="adherencepage__bold-info">Device ID: </span>
              {deviceId}
            </p>
            <p>
              <span className="adherencepage__bold-info">Medication: </span>
              {medicationDetails.map((detail, index) => (
                <span key={index}>
                  {detail}
                  {index < medicationDetails.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="adherencepage__dashboard">
          <div className="adherencepage__first-row">
            <div className="adherencepage__widget">
              <div className="adherencepage__widget-title">
                {" "}
                <BarChartIcon />
                Summary Statistics
              </div>
              <div className="adherencepage__widget-content">
                <SummaryStats events={events} threshold={threshold} emptyState={emptyState} />
              </div>
            </div>
            <div className="adherencepage__widget">
              <div className="adherencepage__widget-title">
                <PillIcon />
                Medication Regimen
              </div>
              <div className="adherencepage__widget-content">
                <WeeklyStats regimen={regimen} events={events} emptyState={emptyState} />
              </div>
            </div>
          </div>
          {emptyState ? (
            ""
          ) : (
            <div className="adherencepage__widget">
              <div className="adherencepage__widget-title">
                <LineChartIcon />
                Trends over Time
              </div>
              <div className="adherencepage__widget-content">
                <LineChart selectedPatient={selectedPatient} />
              </div>
            </div>
          )}
          <div className="adherencepage__widget">
            <div className="adherencepage__widget-title">
              <CalendarIcon />
              Calendar
            </div>
            <div className="adherencepage__widget-content">
              <Calendar events={events} />
            </div>
          </div>
        </div>
      </>
    );
  } else return <div> Error: no patient selected. </div>;
}

export default AdherencePage;
