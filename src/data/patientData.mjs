export const patientData = [
  {
    id: 1,
    deviceId: 476504,
    firstName: "Emily",
    lastName: "Johnson",
    sex: "female",
    dob: new Date("1952-06-02").toLocaleDateString(),
    date: new Date("2023-03-10").toLocaleDateString(),
    pharmacist: "Dr. Smith",
    intakeData: [
      { id: "2023-11-14T16:20:00.170Z-tue", date: "2023-11-14T16:20:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2023-11-15T16:00:00.170Z-wed", date: "2023-11-15T16:00:00.170Z", container: "wed", pillpresent: 0, title: "on time" },
      { id: "2023-11-16T16:00:00.170Z-thu", date: "2023-11-16T16:00:00.170Z", container: "thu", pillpresent: 1, title: "missed" },
      { id: "2023-11-17T16:00:00.170Z-fri", date: "2023-11-17T16:22:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2023-11-18T16:00:00.170Z-sat", date: "2023-11-18T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },
      { id: "2023-11-19T16:59:00.170Z-sun", date: "2023-11-19T16:59:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2023-11-20T16:13:00.170Z-mon", date: "2023-11-20T16:13:00.170Z", container: "mon", pillpresent: 0, title: "on time" },

      { id: "2023-11-21T16:00:00.170Z-tue", date: "2023-11-21T16:00:00.170Z", container: "tue", pillpresent: 1, title: "missed" },
      { id: "2023-11-22T16:00:00.170Z-wed", date: "2023-11-22T16:00:00.170Z", container: "wed", pillpresent: 0, title: "on time" },
      { id: "2023-11-23T16:00:00.170Z-thu", date: "2023-11-23T16:00:00.170Z", container: "thu", pillpresent: 0, title: "on time" },
      { id: "2023-11-24T16:00:00.170Z-fri", date: "2023-11-24T16:00:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2023-11-25T23:00:49.170Z-sat", date: "2023-11-25T23:00:49.170Z", container: "sat", pillpresent: 0, title: "late" },
      { id: "2023-11-26T24:00:49.170Z-sun", date: "2023-11-26T23:00:49.170Z", container: "sun", pillpresent: 0, title: "late" },
      { id: "2023-11-27T16:00:00.170Z-mon", date: "2023-11-27T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },

      { id: "2023-11-28T16:00:00.170Z-tue", date: "2023-11-28T16:00:00.170Z", container: "tue", pillpresent: 1, title: "missed" },
      { id: "2023-11-29T16:00:00.170Z-wed", date: "2023-11-29T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },
      { id: "2023-11-30T16:00:00.170Z-thu", date: "2023-11-30T16:00:00.170Z", container: "thu", pillpresent: 1, title: "missed" },

      { id: "2023-12-01T16:00:00.170Z-fri", date: "2023-12-01T16:00:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2023-12-02T16:00:00.170Z-sat", date: "2023-12-02T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },
      { id: "2023-12-03T16:00:00.170Z-sun", date: "2023-12-03T16:00:00.170Z", container: "sun", pillpresent: 1, title: "missed" },
      { id: "2023-12-04T23:00:49.170Z-mon", date: "2023-12-04T23:00:49.170Z", container: "mon", pillpresent: 0, title: "late" },
      { id: "2023-12-05T24:00:49.170Z-tue", date: "2023-12-05T23:00:49.170Z", container: "tue", pillpresent: 0, title: "late" },
      { id: "2023-12-06T16:00:00.170Z-wed", date: "2023-12-06T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },

      { id: "2023-12-07T16:00:00.170Z-thu", date: "2023-12-07T20:11:00.170Z", container: "thu", pillpresent: 0, title: "late" },
      { id: "2023-12-08T16:00:00.170Z-fri", date: "2023-12-08T21:45:00.170Z", container: "fri", pillpresent: 0, title: "late" },
      { id: "2023-12-09T16:00:00.170Z-sat", date: "2023-12-09T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },
      { id: "2023-12-10T16:00:00.170Z-sun", date: "2023-12-10T16:00:00.170Z", container: "sun", pillpresent: 1, title: "missed" },
      { id: "2023-12-11T23:00:49.170Z-mon", date: "2023-12-11T23:00:49.170Z", container: "mon", pillpresent: 0, title: "late" },
      { id: "2023-12-12T24:00:49.170Z-tue", date: "2023-12-12T23:00:49.170Z", container: "tue", pillpresent: 0, title: "late" },
      { id: "2023-12-13T16:00:00.170Z-wed", date: "2023-12-13T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },

      { id: "2023-12-14T16:20:00.170Z-thu", date: "2023-12-14T16:20:00.170Z", container: "thu", pillpresent: 0, title: "on time" },
      { id: "2023-12-15T16:00:00.170Z-fri", date: "2023-12-15T16:00:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2023-12-16T16:00:00.170Z-sat", date: "2023-12-16T16:00:00.170Z", container: "sat", pillpresent: 1, title: "missed" },
      { id: "2023-12-17T16:00:00.170Z-sun", date: "2023-12-17T16:22:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2023-12-18T16:00:00.170Z-mon", date: "2023-12-18T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2023-12-19T16:59:00.170Z-tue", date: "2023-12-19T16:59:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2023-12-20T16:13:00.170Z-wed", date: "2023-12-20T16:13:00.170Z", container: "wed", pillpresent: 0, title: "on time" },

      { id: "2023-12-21T16:00:00.170Z-thu", date: "2023-12-21T16:00:00.170Z", container: "thu", pillpresent: 1, title: "missed" },
      { id: "2023-12-22T16:00:00.170Z-fri", date: "2023-12-22T16:00:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2023-12-23T16:00:00.170Z-sat", date: "2023-12-23T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },
      { id: "2023-12-24T16:00:00.170Z-sun", date: "2023-12-24T16:00:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2023-12-25T23:00:49.170Z-mon", date: "2023-12-25T23:00:49.170Z", container: "mon", pillpresent: 0, title: "late" },
      { id: "2023-12-26T24:00:49.170Z-tue", date: "2023-12-26T23:00:49.170Z", container: "tue", pillpresent: 0, title: "late" },
      { id: "2023-12-27T16:00:00.170Z-wed", date: "2023-12-27T16:00:00.170Z", container: "wed", pillpresent: 0, title: "on time" },

      { id: "2023-12-28T16:00:00.170Z-thu", date: "2023-12-28T16:00:00.170Z", container: "thu", pillpresent: 1, title: "missed" },
      { id: "2023-12-29T16:00:00.170Z-fri", date: "2023-12-29T16:00:00.170Z", container: "fri", pillpresent: 1, title: "missed" },
      { id: "2023-12-30T16:00:00.170Z-sat", date: "2023-12-30T16:00:00.170Z", container: "sat", pillpresent: 1, title: "missed" },
      { id: "2023-12-31T16:00:00.170Z-sun", date: "2023-12-31T16:00:00.170Z", container: "sun", pillpresent: 0, title: "on time" },

      { id: "2024-01-07T16:00:00.170Z-sun", date: "2024-01-07T16:00:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-01-08T16:00:00.170Z-mon", date: "2024-01-08T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-01-09T16:00:00.170Z-tue", date: "2024-01-09T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-01-10T16:00:00.170Z-wed", date: "2024-01-10T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },
      { id: "2024-01-11T23:00:49.170Z-thu", date: "2024-01-11T23:00:49.170Z", container: "thu", pillpresent: 0, title: "late" },
      { id: "2024-01-12T24:00:49.170Z-fri", date: "2024-01-12T23:00:49.170Z", container: "fri", pillpresent: 0, title: "late" },
      { id: "2024-01-13T16:00:00.170Z-sat", date: "2024-01-13T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-01-14T16:20:00.170Z-sun", date: "2024-01-14T16:20:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-01-15T16:00:00.170Z-mon", date: "2024-01-15T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-01-16T16:00:00.170Z-tue", date: "2024-01-16T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-01-17T16:00:00.170Z-wed", date: "2024-01-17T16:22:00.170Z", container: "wed", pillpresent: 0, title: "on time" },
      { id: "2024-01-18T16:00:00.170Z-thu", date: "2024-01-18T16:00:00.170Z", container: "thu", pillpresent: 0, title: "on time" },
      { id: "2024-01-19T16:59:00.170Z-fri", date: "2024-01-19T16:59:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2024-01-20T16:13:00.170Z-sat", date: "2024-01-20T16:13:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-01-21T16:00:00.170Z-sun", date: "2024-01-21T16:00:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-01-22T16:00:00.170Z-mon", date: "2024-01-22T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-01-23T16:00:00.170Z-tue", date: "2024-01-23T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-01-24T16:00:00.170Z-wed", date: "2024-01-24T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },
      { id: "2024-01-25T23:00:49.170Z-thu", date: "2024-01-25T23:00:49.170Z", container: "thu", pillpresent: 0, title: "late" },
      { id: "2024-01-26T24:00:49.170Z-fri", date: "2024-01-26T23:00:49.170Z", container: "fri", pillpresent: 0, title: "late" },
      { id: "2024-01-27T16:00:00.170Z-sat", date: "2024-01-27T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-01-28T16:00:00.170Z-sun", date: "2024-01-28T16:00:00.170Z", container: "sun", pillpresent: 1, title: "missed" },
      { id: "2024-01-29T16:00:00.170Z-mon", date: "2024-01-29T16:00:00.170Z", container: "mon", pillpresent: 1, title: "missed" },
      { id: "2024-01-30T16:00:00.170Z-tue", date: "2024-01-30T16:00:00.170Z", container: "tue", pillpresent: 1, title: "missed" },
      { id: "2024-01-31T16:00:00.170Z-wed", date: "2024-01-31T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },
      { id: "2024-02-01T16:00:00.170Z-thu", date: "2024-02-01T16:00:00.170Z", container: "thu", pillpresent: 1, title: "missed" },
      { id: "2024-02-02T16:00:00.170Z-fri", date: "2024-02-02T16:00:00.170Z", container: "fri", pillpresent: 1, title: "missed" },
      { id: "2024-02-03T16:00:00.170Z-sat", date: "2024-02-03T16:00:00.170Z", container: "sat", pillpresent: 1, title: "missed" },

      { id: "2024-02-04T16:11:00.170Z-sun", date: "2024-02-04T16:11:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-02-05T16:05:00.170Z-mon", date: "2024-02-05T16:05:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-02-06T18:33:00.170Z-tue", date: "2024-02-06T18:33:00.170Z", container: "tue", pillpresent: 0, title: "late" },
      { id: "2024-02-07T16:00:00.170Z-wed", date: "2024-02-07T16:00:00.170Z", container: "wed", pillpresent: 0, title: "on time" },
      { id: "2024-02-08T16:08:00.170Z-thu", date: "2024-02-08T16:08:00.170Z", container: "thu", pillpresent: 0, title: "on time" },
      { id: "2024-02-09T16:10:00.170Z-fri", date: "2024-02-09T16:10:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2024-02-10T16:00:00.170Z-sat", date: "2024-02-10T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-02-11T16:20:00.170Z-sun", date: "2024-02-11T16:20:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-02-12T16:00:00.170Z-mon", date: "2024-02-12T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-02-13T16:00:00.170Z-tue", date: "2024-02-13T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-02-14T16:00:00.170Z-wed", date: "2024-02-14T16:22:00.170Z", container: "wed", pillpresent: 0, title: "on time" },
      { id: "2024-02-15T16:00:00.170Z-thu", date: "2024-02-15T16:00:00.170Z", container: "thu", pillpresent: 0, title: "on time" },
      { id: "2024-02-16T16:59:00.170Z-fri", date: "2024-02-16T16:59:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2024-02-17T16:13:00.170Z-sat", date: "2024-02-17T16:13:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-02-18T24:00:49.170Z-sun", date: "2024-02-18T16:00:49.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-02-19T16:00:00.170Z-mon", date: "2024-02-19T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-02-20T16:00:00.170Z-tue", date: "2024-02-20T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-02-21T16:00:00.170Z-wed", date: "2024-02-21T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },
      { id: "2024-02-22T23:00:49.170Z-thu", date: "2024-02-22T23:00:49.170Z", container: "thu", pillpresent: 0, title: "late" },
      { id: "2024-02-23T16:00:00.170Z-fri", date: "2024-02-23T16:00:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2024-02-24T16:00:00.170Z-sat", date: "2024-02-24T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-02-25T23:00:49.170Z-sun", date: "2024-02-25T16:00:49.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-02-26T16:00:00.170Z-mon", date: "2024-02-26T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-02-27T16:00:00.170Z-tue", date: "2024-02-27T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-02-28T16:13:00.170Z-wed", date: "2024-02-28T16:13:00.170Z", container: "wed", pillpresent: 0, title: "on time" },
      { id: "2024-02-29T16:00:00.170Z-thu", date: "2024-02-29T16:00:00.170Z", container: "thu", pillpresent: 0, title: "on time" },
      { id: "2024-03-01T16:59:00.170Z-fri", date: "2024-03-01T16:59:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2024-03-02T16:13:00.170Z-sat", date: "2024-03-02T16:13:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-03-03T16:20:00.170Z-sun", date: "2024-03-03T16:20:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-03-04T16:00:00.170Z-mon", date: "2024-03-04T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-03-05T16:00:00.170Z-tue", date: "2024-03-05T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-03-06T16:00:00.170Z-wed", date: "2024-03-06T16:22:00.170Z", container: "wed", pillpresent: 0, title: "on time" },
      { id: "2024-03-07T16:00:00.170Z-thu", date: "2024-03-07T16:00:00.170Z", container: "thu", pillpresent: 0, title: "on time" },
      { id: "2024-03-08T16:59:00.170Z-fri", date: "2024-03-08T16:59:00.170Z", container: "fri", pillpresent: 0, title: "on time" },
      { id: "2024-03-09T16:13:00.170Z-sat", date: "2024-03-09T16:13:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-03-10T16:00:00.170Z-sun", date: "2024-03-10T16:00:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-03-11T16:00:00.170Z-mon", date: "2024-03-11T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-03-12T16:00:00.170Z-tue", date: "2024-03-12T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-03-13T16:00:00.170Z-wed", date: "2024-03-13T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },
      { id: "2024-03-14T23:00:49.170Z-thu", date: "2024-03-14T23:00:49.170Z", container: "thu", pillpresent: 0, title: "late" },
      { id: "2024-03-15T24:00:49.170Z-fri", date: "2024-03-15T23:00:49.170Z", container: "fri", pillpresent: 0, title: "late" },
      { id: "2024-03-16T16:00:00.170Z-sat", date: "2024-03-16T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-03-17T23:00:49.170Z-sun", date: "2024-03-17T16:00:49.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-03-18T16:00:00.170Z-mon", date: "2024-03-18T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-03-19T16:00:00.170Z-tue", date: "2024-03-19T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-03-20T16:13:00.170Z-wed", date: "2024-03-20T16:13:00.170Z", container: "wed", pillpresent: 0, title: "late" },
    ],
    regimen: [
      {
        medication: "Metformin",
        dose: "500",
        doseUnit: "mg",
        threshold: 2, // hours
        schedule: {
          sun: { time: "16:00:00.170Z", nPills: 1 },
          mon: { time: "16:00:00.170Z", nPills: 1 },
          tue: { time: "16:00:00.170Z", nPills: 1 },
          wed: { time: "16:00:00.170Z", nPills: 1 },
          thu: { time: "16:00:00.170Z", nPills: 1 },
          fri: { time: "16:00:00.170Z", nPills: 1 },
          sat: { time: "16:00:00.170Z", nPills: 1 },
        },
      },
    ],
    minAdherence: 80, // percent
  },
  {
    id: 2,
    deviceId: 344298,
    firstName: "Michael",
    lastName: "Brown",
    sex: "male",
    dob: new Date("1944-06-11").toLocaleDateString(),
    date: new Date("2023-12-30").toLocaleDateString(),
    pharmacist: "Dr. Smith",
    intakeData: [
      { id: "2024-03-10T16:00:00.170Z-sun", date: "2024-03-10T16:00:00.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-03-11T16:00:00.170Z-mon", date: "2024-03-11T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-03-12T16:00:00.170Z-tue", date: "2024-03-12T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-03-13T16:00:00.170Z-wed", date: "2024-03-13T16:00:00.170Z", container: "wed", pillpresent: 1, title: "missed" },
      { id: "2024-03-14T23:00:49.170Z-thu", date: "2024-03-14T23:00:49.170Z", container: "thu", pillpresent: 0, title: "late" },
      { id: "2024-03-15T24:00:49.170Z-fri", date: "2024-03-15T23:00:49.170Z", container: "fri", pillpresent: 0, title: "late" },
      { id: "2024-03-16T16:00:00.170Z-sat", date: "2024-03-16T16:00:00.170Z", container: "sat", pillpresent: 0, title: "on time" },

      { id: "2024-03-17T23:00:49.170Z-sun", date: "2024-03-17T16:00:49.170Z", container: "sun", pillpresent: 0, title: "on time" },
      { id: "2024-03-18T16:00:00.170Z-mon", date: "2024-03-18T16:00:00.170Z", container: "mon", pillpresent: 0, title: "on time" },
      { id: "2024-03-19T16:00:00.170Z-tue", date: "2024-03-19T16:00:00.170Z", container: "tue", pillpresent: 0, title: "on time" },
      { id: "2024-03-20T16:13:00.170Z-wed", date: "2024-03-20T16:13:00.170Z", container: "wed", pillpresent: 0, title: "late" },
    ],
    regimen: [
      {
        medication: "Atorvastatin",
        dose: "20",
        doseUnit: "mg",
        threshold: 2, // hours
        schedule: {
          sun: { time: "11:00:00.170Z", nPills: 1 },
          mon: { time: "11:00:00.170Z", nPills: 1 },
          tue: { time: "11:00:00.170Z", nPills: 1 },
          wed: { time: "11:00:00.170Z", nPills: 1 },
          thu: { time: "11:00:00.170Z", nPills: 1 },
          fri: { time: "11:00:00.170Z", nPills: 1 },
          sat: { time: "11:00:00.170Z", nPills: 1 },
        },
      },
      {
        medication: "Metformin",
        dose: "500",
        doseUnit: "mg",
        threshold: 2, // hours
        schedule: {
          sun: { time: "11:00:00.170Z", nPills: 1 },
          mon: { time: "11:00:00.170Z", nPills: 1 },
          tue: { time: "11:00:00.170Z", nPills: 1 },
          wed: { time: "11:00:00.170Z", nPills: 1 },
          thu: { time: "11:00:00.170Z", nPills: 1 },
          fri: { time: "11:00:00.170Z", nPills: 1 },
          sat: { time: "11:00:00.170Z", nPills: 1 },
        },
      },
    ],
    minAdherence: 80, // percent
  },
  {
    id: 3,
    deviceId: 49302,
    firstName: "Sophia",
    lastName: "Martinez",
    sex: "female",
    dob: new Date("1944-06-11").toLocaleDateString(),
    date: new Date("2023-07-22").toLocaleDateString(),
    pharmacist: "Dr. Clark",
    intakeData: [
      { id: "2024-01-14T16:20:00.170Z-sun", date: "2024-01-14T16:20:00.170Z", container: "sunday", pillpresent: 0, title: "on time" },
      { id: "2024-01-15T16:00:00.170Z-mon", date: "2024-01-15T16:00:00.170Z", container: "monday", pillpresent: 0, title: "on time" },
      { id: "2024-01-16T16:00:00.170Z-tue", date: "2024-01-16T16:00:00.170Z", container: "tuesday", pillpresent: 0, title: "on time" },
      { id: "2024-01-17T16:00:00.170Z-wed", date: "2024-01-17T16:22:00.170Z", container: "wednesday", pillpresent: 0, title: "on time" },
      { id: "2024-01-18T16:00:00.170Z-thu", date: "2024-01-18T16:00:00.170Z", container: "thursday", pillpresent: 0, title: "on time" },
      { id: "2024-01-19T16:59:00.170Z-fri", date: "2024-01-19T16:59:00.170Z", container: "friday", pillpresent: 0, title: "on time" },
      { id: "2024-01-20T16:13:00.170Z-say", date: "2024-01-20T16:13:00.170Z", container: "saturday", pillpresent: 0, title: "on time" },

      { id: "2024-02-04T16:20:00.170Z-sun", date: "2024-02-04T16:20:00.170Z", container: "sunday", pillpresent: 0, title: "on time" },
      { id: "2024-02-05T16:00:00.170Z-mon", date: "2024-02-05T16:00:00.170Z", container: "monday", pillpresent: 0, title: "on time" },
      { id: "2024-02-06T16:00:00.170Z-tue", date: "2024-02-06T16:00:00.170Z", container: "tuesday", pillpresent: 0, title: "on time" },
      { id: "2024-02-07T16:00:00.170Z-wed", date: "2024-02-07T16:22:00.170Z", container: "wednesday", pillpresent: 0, title: "on time" },
      { id: "2024-02-08T16:00:00.170Z-thu", date: "2024-02-08T16:00:00.170Z", container: "thursday", pillpresent: 0, title: "on time" },
      { id: "2024-02-09T16:59:00.170Z-fri", date: "2024-02-09T16:59:00.170Z", container: "friday", pillpresent: 0, title: "on time" },
      { id: "2024-02-10T16:13:00.170Z-say", date: "2024-02-10T16:13:00.170Z", container: "saturday", pillpresent: 0, title: "on time" },
    ],
    regimen: [
      {
        medication: "Metropolol",
        dose: "50",
        doseUnit: "mg",
        threshold: 2, // hours
        schedule: {
          sun: { time: "16:00:00.170Z", nPills: 1 },
          mon: { time: "16:00:00.170Z", nPills: 1 },
          tue: { time: "16:00:00.170Z", nPills: 1 },
          wed: { time: "16:00:00.170Z", nPills: 1 },
          thu: { time: "16:00:00.170Z", nPills: 1 },
          fri: { time: "16:00:00.170Z", nPills: 1 },
          sat: { time: "16:00:00.170Z", nPills: 1 },
        },
      },
    ],
    minAdherence: 80, // percent
  },
];
