// Get colour code based on the event type.
// @param object: event selectedPatient.intake_events[i]
// @param string: event.title
// @returns string: colour code
export const getEventColour = (title) => {
  if (title === "on time") {
    return "#34B53A"; // Green
  } else if (title === "late" || title === "early") {
    return "#FFC700"; // Yellow
  } else if (title === "missed") {
    return "#E24646"; // Red
  }
  return "#ededed";
};

// Get colour code based on adherence level
// @param bool: isAdherent
// @returns string: colour code
export const getAdherenceColour = (isAdherent) => {
  if (isAdherent) return "#444444"; // Neutral
  else return "#E24646"; // Red
};

// Get summary statistics for percentage of on time, late/early, and missed events.
// @param object: selectedPatient.intake_events
// @param string: event.title
// @returns object: { onTime, earlyLate, missed } containing percentages
export const getSummaryStats = (events) => {
  const defaultStats = { onTime: 0, early: 0, late: 0, missed: 0 };
  if (events) {
    const totalEvents = events.length;
    const count = events.reduce((acc, event) => {
      if (event.title === "on time") acc.onTime += 1;
      else if (event.title === "early") acc.early += 1;
      else if (event.title === "late") acc.late += 1;
      else if (event.title === "missed") acc.missed += 1;
      return acc;
    }, defaultStats);
    return {
      onTime: (count.onTime / totalEvents) * 100,
      early: (count.early / totalEvents) * 100,
      late: (count.late / totalEvents) * 100,
      missed: (count.missed / totalEvents) * 100,
    };
  }
  return defaultStats;
};

// Helper function, group all events by month
// @param object: selectedPatient.intake_events
// @returns object: events grouped by month
const groupEventsByMonth = (events) => {
  const groupedEvents = {};
  if (events) {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
      const month = eventDate.toLocaleString("default", { month: "long" });
      if (!groupedEvents[month]) {
        groupedEvents[month] = [];
      }
      groupedEvents[month].push(event);
    });
    return groupedEvents;
  } else return groupedEvents;
};

// Helper function, group all events by day
// @param object: selectedPatient.intake_events
// @returns object: events grouped by day
const groupEventsByDay = (events) => {
  const groupedEvents = {};
  if (events) {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
      const day = eventDate.toLocaleString("en-US", { weekday: "short" }).toLowerCase();
      if (!groupedEvents[day]) {
        groupedEvents[day] = [];
      }
      groupedEvents[day].push(event);
    });
    return groupedEvents;
  } else return groupedEvents;
};

// Format time to correct timezone, in a readable format
// @param string: time in ISO 8601 format (UTC)
// @returns string: readable format, desired timezone
export const formatTime = (time) => {
  const dateTimeString = `1970-01-01T${time}`;
  const dateTime = new Date(dateTimeString);
  const timeZone = "EST";
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timeZone,
  }).format(dateTime);
  return formattedTime;
};

// Get adherence percentage each month
// @param object: selectedPatient.intake_events
// @returns object: 12 months with adherence percentage per month
export const getAdherenceTrendsByMonth = (events) => {
  const groupedEvents = groupEventsByMonth(events);
  const monthRates = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };

  for (const [month, eventsInMonth] of Object.entries(groupedEvents)) {
    const percentage = getSummaryStats(eventsInMonth);
    if (percentage && percentage.onTime !== undefined) {
      monthRates[month] = percentage.onTime;
    }
  }

  return {
    January: monthRates.January || null,
    February: monthRates.February || null,
    March: monthRates.March || null,
    April: monthRates.April || null,
    May: monthRates.May || null,
    June: monthRates.June || null,
    July: monthRates.July || null,
    August: monthRates.August || null,
    September: monthRates.September || null,
    October: monthRates.October || null,
    November: monthRates.November || null,
    December: monthRates.December || null,
  };
};

// Helper function, group the regimen by time - to display organized
// by time on the interface
// @param object: selectedPatient.regimen.schedule in the format `regimen: [{medication, threshold, schedule: {}]`
// @returns object: schedule in the format `time: [{day, {medication, nPills}}]`
export const getScheduleByTime = (regimen) => {
  if (!regimen || !Array.isArray(regimen)) return {};

  const defaultScheduleByTime = {
    "00:00": [
      { day: "sun", dose: [{ medication: "", nPills: 0 }] },
      { day: "mon", dose: [{ medication: "", nPills: 0 }] },
      { day: "tue", dose: [{ medication: "", nPills: 0 }] },
      { day: "wed", dose: [{ medication: "", nPills: 0 }] },
      { day: "thu", dose: [{ medication: "", nPills: 0 }] },
      { day: "fri", dose: [{ medication: "", nPills: 0 }] },
      { day: "sat", dose: [{ medication: "", nPills: 0 }] },
    ],
  };

  // Initialize scheduleByTime as an object
  const scheduleByTime = {};

  regimen.forEach(({ medication, schedule }) => {
    Object.entries(schedule).forEach(([day, { time, nPills }]) => {
      const formattedTime = formatTime(time);
      if (!scheduleByTime[formattedTime]) {
        scheduleByTime[formattedTime] = JSON.parse(JSON.stringify(defaultScheduleByTime["00:00"]));
      }
      const dayEntry = scheduleByTime[formattedTime].find((entry) => entry.day === day);
      if (dayEntry) {
        dayEntry.dose.push({ medication, nPills });
      }
    });
  });

  return scheduleByTime;
};

export const getAdherenceTrendsByDay = (events) => {
  const groupedEvents = groupEventsByDay(events);
  const dayRates = {
    sun: { onTime: 0, early: 0, late: 0, missed: 0 },
    mon: { onTime: 0, early: 0, late: 0, missed: 0 },
    tue: { onTime: 0, early: 0, late: 0, missed: 0 },
    wed: { onTime: 0, early: 0, late: 0, missed: 0 },
    thu: { onTime: 0, early: 0, late: 0, missed: 0 },
    fri: { onTime: 0, early: 0, late: 0, missed: 0 },
    sat: { onTime: 0, early: 0, late: 0, missed: 0 },
  };

  for (const [day, eventsInDay] of Object.entries(groupedEvents)) {
    const percentage = getSummaryStats(eventsInDay);
    dayRates[day].onTime = percentage.onTime || 0;
    dayRates[day].early = percentage.early || 0;
    dayRates[day].late = percentage.late || 0;
    dayRates[day].missed = percentage.missed || 0;
  }
  return dayRates;
};
