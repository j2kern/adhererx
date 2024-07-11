import React, { useState, useEffect } from "react";
import { getEventColour, getSummaryStats } from "../../utils/utils";
import "./summaryStats.css";

// Represents summary statistic card on adherence page
// @param object: events selectedPatient.intake_events
// @param int: threshold val (hours) +/- prescribed time: selectedPatient.regimen.threshold
const SummaryStats = ({ events = [], threshold, emptyState }) => {
  const defaultStats = { onTime: 0, earlyLate: 0, missed: 0 };
  const [currentStats, setCurrentStats] = useState(defaultStats);
  const onTimeColor = getEventColour("on time");
  const earlyLateColor = getEventColour("early");
  const missedColor = getEventColour("missed");

  useEffect(() => {
    const percentages = getSummaryStats(events);
    setCurrentStats(percentages);
  }, []);

  return (
    <div>
      <div className="summarystats">
        <div>
          <div className="summarystats__percentage">
            {emptyState ? "-" : currentStats.onTime ? currentStats.onTime.toFixed() + "%" : "0%"}
          </div>
          <div className="summarystats__subheading">
            <div className="summarystats__circle" style={{ backgroundColor: `${onTimeColor}` }} />
            On Time
          </div>
        </div>
        <div>
          <div className="summarystats__percentage">
            {emptyState ? "-" : currentStats.early || currentStats.late ? (currentStats.early + currentStats.late).toFixed() + "%" : "0%"}
          </div>
          <div className="summarystats__subheading">
            <div className="summarystats__circle" style={{ backgroundColor: `${earlyLateColor}` }} />
            Early or Late
          </div>
        </div>
        <div>
          <div className="summarystats__percentage">
            {emptyState ? "-" : currentStats.missed ? currentStats.missed.toFixed() + "%" : "0%"}
          </div>
          <div className="summarystats__subheading">
            <div className="summarystats__circle" style={{ backgroundColor: `${missedColor}` }} />
            Missed
          </div>
        </div>
      </div>
      <div className="summarystats__footnote ">A patient is 'on time' if medication is taken within the intake window.</div>
    </div>
  );
};

export default SummaryStats;

//https://www.youtube.com/watch?v=wYpCWwD1oz0&list=PLEYW3pZS6IQ_a-iYAno4VsZonrikphq8L
