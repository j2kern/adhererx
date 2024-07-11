import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import "./calendar.css";

import { getEventColour } from "../../utils/utils";

// Calendar component
// @param object: events selectedPatient.intake_events
const Calendar = ({ events = [] }) => {
  const [currentEvents, setCurrentEvents] = useState(events);

  // retrieves associated colour with each event
  const eventColour = currentEvents.map((event) => ({
    ...event,
    backgroundColor: getEventColour(event.title),
    borderColor: getEventColour(event.title),
  }));

  return (
    <div className="calendar">
      <div>
        <FullCalendar
          headerToolbar={{
            left: "title",
            right: "dayGridMonth,timeGridWeek,prev,next,today",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, multiMonthPlugin]}
          initialView="dayGridMonth" //multiMonthYear - for scroll
          events={eventColour}
          multiMonthMaxColumns={1}
          editable={true}
          selectable={true}
        />
      </div>
    </div>
  );
};

export default Calendar;

//https://www.youtube.com/watch?v=wYpCWwD1oz0&list=PLEYW3pZS6IQ_a-iYAno4VsZonrikphq8L
