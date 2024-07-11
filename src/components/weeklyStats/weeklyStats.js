import React, { useEffect } from "react";
import { getScheduleByTime, getAdherenceTrendsByDay, getEventColour } from "../../utils/utils";
import { weekDays } from "../../data/formData.mjs";
import IconLibrary from "../../utils/iconLibrary";
import "./weeklyStats.css";

// Represents medication regimen? weekly stats? TBD
// @param string: selectedPatient.regimen
const WeeklyStats = ({ regimen, events, emptyState, previewState }) => {
  const scheduleByTime = getScheduleByTime(regimen);
  const percentage = getAdherenceTrendsByDay(events);
  const minPercentage = 25;

  const ErrorIcon = IconLibrary["errorIcon"];
  const WarningIcon = IconLibrary["warningIcon"];
  const highlightColour = {
    missed: { primary: getEventColour("missed"), secondary: "#fbe7e7" },
    earlyLate: { primary: getEventColour("early"), secondary: "#fbf0c0" },
  };

  const calculateOffence = (item, percentage, minPercentage) => {
    const offenceCounts = {
      missed: percentage[item.day].missed,
      early: percentage[item.day].early,
      late: percentage[item.day].late,
    };
    const mostOftenOffence = Object.keys(offenceCounts).reduce((a, b) => (offenceCounts[a] > offenceCounts[b] ? a : b));
    const showOffence =
      percentage[item.day].missed > minPercentage || percentage[item.day].early > minPercentage || percentage[item.day].late > minPercentage
        ? true
        : false;

    return { showOffence, mostOftenOffence };
  };

  useEffect(() => {}, []);

  return (
    <div className="weeklystats__widget">
      <div className="weeklystats">
        {Object.entries(scheduleByTime).map(([time, days = []], index) => (
          <div className="weeklystats__days">
            <div className="weeklystats__day">
              <div className="weeklystats__time">{!previewState ? time : ""}</div>
            </div>
            {days.map((item) => {
              const { showOffence, mostOftenOffence } = calculateOffence(item, percentage, minPercentage);
              return (
                <div>
                  <div key={item.day} className="weeklystats__day ">
                    <div className="weeklystats__text" style={{ display: index > 0 ? "None" : "block" }}>
                      <span
                        className="weeklystats__highlight"
                        style={{
                          backgroundColor:
                            showOffence && mostOftenOffence === "missed"
                              ? highlightColour.missed.secondary
                              : showOffence && (mostOftenOffence === "early" || mostOftenOffence === "late")
                              ? highlightColour.earlyLate.secondary
                              : "",
                          borderRadius: showOffence ? "4px" : "0px",
                        }}
                      >
                        {showOffence ? (
                          mostOftenOffence === "missed" ? (
                            <ErrorIcon style={{ color: highlightColour.missed.primary }} />
                          ) : (
                            <WarningIcon style={{ color: highlightColour.earlyLate.primary }} />
                          )
                        ) : (
                          ""
                        )}
                        {weekDays[item.day]}
                      </span>
                    </div>
                    <div>
                      {item.dose.map((med, index) => (
                        <div key={index} className="weeklystats__pill" style={{ display: med.nPills == 0 ? "None" : "block" }}>
                          {med.nPills} x {med.medication}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {Object.entries(scheduleByTime).map(([time, days = []], index) => (
        <div className="weeklystats__days">
          <div key={time} />
          {index === 0 &&
            days.map((entry) => {
              const { showOffence, mostOftenOffence } = calculateOffence(entry, percentage, minPercentage);
              return (
                <div key={entry.day} className="weeklystats__day">
                  {showOffence ? (
                    mostOftenOffence === "missed" ? (
                      <div className="weeklystats__highlightnote">
                        Patient often <span style={{ fontWeight: "700" }}>{mostOftenOffence}</span> the dose {weekDays[entry.day]}.
                      </div>
                    ) : (
                      <div className="weeklystats__highlightnote">
                        Patient often took the dose <span style={{ fontWeight: "700" }}>{mostOftenOffence}</span> {weekDays[entry.day]}.
                      </div>
                    )
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
        </div>
      ))}
      {!emptyState ? (
        <div className="weeklystats__footnotes">
          <div className="weeklystats__footnote ">
            <span className="weeklystats__bold" style={{ backgroundColor: highlightColour.missed.secondary }}>
              <ErrorIcon style={{ color: highlightColour.missed.primary }} /> Missed doses:{" "}
            </span>{" "}
            Patient has missed their dose more than {minPercentage}% of the time on the highlighted days.
          </div>
          <div className="weeklystats__footnote ">
            <span className="weeklystats__bold" style={{ backgroundColor: highlightColour.earlyLate.secondary }}>
              <WarningIcon style={{ color: highlightColour.earlyLate.primary }} /> Missed doses:{" "}
            </span>{" "}
            Patient was early or late taking their dose more than {minPercentage}% of the time on the highlighted days.
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeeklyStats;

//https://www.youtube.com/watch?v=wYpCWwD1oz0&list=PLEYW3pZS6IQ_a-iYAno4VsZonrikphq8L
