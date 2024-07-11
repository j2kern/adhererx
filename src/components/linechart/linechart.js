import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { getAdherenceTrendsByMonth } from "../../utils/utils";
import "./linechart.css";

// Represents trendline data over 12 month period
// @param object: selectedPatient
const LineChart = ({ selectedPatient }) => {
  const theme = {
    axis: {
      ticks: { text: { fontSize: 12, fontFamily: "Poppins, sans-serif" } },
      legend: { text: { fontSize: 14, fontFamily: "Poppins, sans-serif" } },
    },
    legends: {
      text: { fontSize: 12, fontFamily: "Poppins, sans-serif" },
    },
  };

  const percentage = getAdherenceTrendsByMonth(selectedPatient.intakeData);
  const minAdherence = selectedPatient.minAdherence;
  const medication = selectedPatient.regimen[0]?.medication || "Medication"; // Defaulting to "Medication" if undefined

  // Preparing the data with proper filtering
  const months = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
  const adherenceData = months.map((month) => ({ x: month, y: percentage[month] })).filter((monthData) => monthData.y !== null);

  const data = [
    {
      id: medication,
      data: adherenceData,
    },
  ];

  return (
    <div className="linechart">
      <ResponsiveLine
        data={data}
        theme={theme}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 100,
          stacked: true,
          reverse: false,
        }}
        markers={[
          {
            axis: "y",
            value: minAdherence,
            lineStyle: { stroke: "#e7e7e7", strokeWidth: 1 },
          },
        ]}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 4,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Month",
          legendOffset: 45,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 4,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Average Adherence (%)",
          legendOffset: -55,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabelYOffset={-13}
        useMesh={true}
      />
    </div>
  );
};

export default LineChart;
