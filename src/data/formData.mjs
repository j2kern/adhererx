export const defaultPatientData = {
  id: "",
  deviceId: "",
  firstName: "",
  lastName: "",
  sex: "",
  dob: "",
  date: "",
  pharmacist: "",
  intakeData: [{ id: "", date: "", container: "", pillpresent: 0, title: "" }],
  regimen: [
    {
      medication: "",
      dose: "", // new
      sig: "",
      allPills: 0, // Default value for new regimens
      allTime: "12:00:00.000Z", // Default value for new regimens
      threshold: 2, // hours - intake window
      schedule: {
        sun: { time: "12:00:00.000Z", nPills: 0 },
        mon: { time: "12:00:00.000Z", nPills: 0 },
        tue: { time: "12:00:00.000Z", nPills: 0 },
        wed: { time: "12:00:00.000Z", nPills: 0 },
        thu: { time: "12:00:00.000Z", nPills: 0 },
        fri: { time: "12:00:00.000Z", nPills: 0 },
        sat: { time: "12:00:00.000Z", nPills: 0 },
      },
    },
  ],
  minAdherence: 80, // percent - adherence target
};

export const timeData = [
  "12:00:00.000Z", // 7:00am EST
  "13:00:00.000Z",
  "14:00:00.000Z",
  "15:00:00.000Z",
  "16:00:00.000Z",
  "17:00:00.000Z",
  "18:00:00.000Z",
  "19:00:00.000Z",
  "20:00:00.000Z",
  "21:00:00.000Z",
  "22:00:00.000Z",
  "23:00:00.000Z",
  "00:00:00.000Z",
  "01:00:00.000Z",
  "02:00:00.000Z",
  "03:00:00.000Z",
  "04:00:00.000Z",
  "05:00:00.000Z",
  "06:00:00.000Z",
  "07:00:00.000Z",
  "08:00:00.000Z",
  "09:00:00.000Z",
  "10:00:00.000Z",
  "11:00:00.000Z",
];

export const weekDays = {
  sun: "Sun",
  mon: "Mon",
  tue: "Tues",
  wed: "Wed",
  thu: "Thurs",
  fri: "Fri",
  sat: "Sat",
};

export const sigData = ["QD", "BID", "TID", "QID"];

export const medicationOptions = [
  { id: 1, name: "Acetaminophen" },
  { id: 2, name: "Amlodipine" },
  { id: 3, name: "Atorvastatin" },
  { id: 4, name: "Azithromycin" },
  { id: 5, name: "Baclofen" },
  { id: 6, name: "Cetirizine" },
  { id: 7, name: "Ciprofloxacin" },
  { id: 8, name: "Clindamycin" },
  { id: 9, name: "Diclofenac" },
  { id: 10, name: "Doxycycline" },
  { id: 11, name: "Eliquis" },
  { id: 12, name: "Escitalopram" },
  { id: 13, name: "Esomeprazole" },
  { id: 14, name: "Famotidine" },
  { id: 15, name: "Fluoxetine" },
  { id: 16, name: "Gabapentin" },
  { id: 17, name: "Glyburide" },
  { id: 18, name: "Heparin" },
  { id: 19, name: "Hydrochlorothiazide" },
  { id: 20, name: "Ibuprofen" },
  { id: 21, name: "Insulin Glargine" },
  { id: 22, name: "Januvia" },
  { id: 23, name: "Ketorolac" },
  { id: 24, name: "Lansoprazole" },
  { id: 25, name: "Metformin" },
  { id: 26, name: "Metoprolol" },
  { id: 27, name: "Naproxen" },
  { id: 28, name: "Omeprazole" },
  { id: 29, name: "Paroxetine" },
  { id: 30, name: "Quetiapine" },
  { id: 31, name: "Ramipril" },
  { id: 32, name: "Sertraline" },
  { id: 33, name: "Tadalafil" },
  { id: 34, name: "Tramadol" },
  { id: 35, name: "Ursodiol" },
  { id: 36, name: "Valsartan" },
  { id: 37, name: "Warfarin" },
  { id: 38, name: "Xarelto" },
  { id: 39, name: "Yasmin (Drospirenone/Ethinyl Estradiol)" },
  { id: 40, name: "Zolpidem" },
];
