import { useState } from "react";
import { defaultPatientData, timeData, weekDays, medicationOptions } from "../../data/formData.mjs";
import { useNavigate } from "react-router-dom";
import { formatTime } from "../../utils/utils";
import Button from "../button/button";
import WeeklyStats from "../weeklyStats/weeklyStats";
import "./form.css";

// Form component
// Add Patient / Medication Regimen form
const Form = () => {
  const [patient, setPatient] = useState({ ...defaultPatientData });
  const [numMedications, setNumMedications] = useState(1);

  const handlePatientInfoUpdate = (value, field) => {
    setPatient((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegimenUpdate = (value, field, index) => {
    setPatient((prev) => {
      let updatedRegimen;
      if (index >= prev.regimen.length) {
        const newRegimen = defaultPatientData.regimen;
        updatedRegimen = [...prev.regimen, newRegimen];
      } else {
        updatedRegimen = [...prev.regimen];
        const updatedItem = { ...updatedRegimen[index], [field]: value };
        updatedRegimen[index] = updatedItem;
      }

      return {
        ...prev,
        regimen: updatedRegimen,
      };
    });
  };

  const handleAllPillsChange = (value, index) => {
    setPatient((prev) => ({
      ...prev,
      regimen: prev.regimen.map((reg, regIndex) => {
        if (regIndex === index) {
          return {
            ...reg,
            allPills: parseInt(value, 10),
            schedule: Object.fromEntries(
              Object.entries(reg.schedule).map(([day, sched]) => [day, { ...sched, nPills: parseInt(value, 10) }])
            ),
          };
        }
        return reg;
      }),
    }));
  };

  const handleAllTimeChange = (value, index) => {
    setPatient((prev) => ({
      ...prev,
      regimen: prev.regimen.map((reg, regIndex) => {
        if (regIndex === index) {
          return {
            ...reg,
            allTime: value,
            schedule: Object.fromEntries(Object.entries(reg.schedule).map(([day, sched]) => [day, { ...sched, time: value }])),
          };
        }
        return reg;
      }),
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5001/create-patient", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient),
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Patient Information</h3>
        <div className="form__section">
          <div className="form__sectionQuestions">
            <div className="form__question">
              <label>First Name </label>
              <input type="text" required placeholder="first name" onChange={(e) => handlePatientInfoUpdate(e.target.value, "firstName")} />
            </div>

            <div className="form__question">
              <label>Last Name </label>
              <input type="text" required placeholder="last name" onChange={(e) => handlePatientInfoUpdate(e.target.value, "lastName")} />
            </div>

            <div className="form__question">
              <label>Sex</label>
              <select required onChange={(e) => handlePatientInfoUpdate(e.target.value, "sex")}>
                <option>-</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form__question">
              <label>Date of Birth</label>
              <input type="date" required onChange={(e) => handlePatientInfoUpdate(e.target.value, "dob")} />
            </div>

            <div className="form__question">
              <label>Device ID</label>
              <input type="text" required placeholder="XXXX" onChange={(e) => handlePatientInfoUpdate(e.target.value, "deviceId")} />
            </div>

            <div className="form__question">
              <label>Adherence Target (%)</label>
              <input
                type="number"
                placeholder="80%"
                min="0"
                max="100"
                onChange={(e) => handlePatientInfoUpdate(e.target.value, "minAdherence")}
              />
            </div>
          </div>
        </div>
        <div>
          <h3>Prescription Information</h3>
        </div>
        {Array.from({ length: numMedications }, (_, index) => (
          <div className="form__section" key={index}>
            <div className="form__question">
              <div>
                <label>Medication</label>
                <select required onChange={(e) => handleRegimenUpdate(e.target.value, "medication", index)}>
                  <option value="">-</option>
                  {medicationOptions.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div className="form__question">
                  <label>Dose</label>
                  <input
                    required
                    type="number"
                    placeholder="##"
                    min="0"
                    onChange={(e) => handleRegimenUpdate(e.target.value, "dose", index)}
                  />
                  <select required onChange={(e) => handleRegimenUpdate(e.target.value, "doseUnit", index)}>
                    <option>-</option>
                    <option>mg</option>
                    <option>g</option>
                  </select>
                </div>

                <div className="form__question">
                  <label>SIG</label>
                  <select>
                    <option>-</option>
                    <option>qd (once a day)</option>
                    <option>bid (twice a day)</option>
                    <option>tid (three times a day)</option>
                    <option>qid (four times a day)</option>
                  </select>
                </div>
                {/* Updates all fields for the days of the week */}
                <div>
                  <label>Set quantity and intake time </label>
                  <input
                    type="number"
                    value={patient.regimen[index].allPills}
                    min="0"
                    max="15"
                    onChange={(e) => handleAllPillsChange(e.target.value, index)}
                  />
                  <span>pill(s) at </span>
                  <select value={patient.regimen[index].allTime} onChange={(e) => handleAllTimeChange(e.target.value, index)}>
                    {timeData.map((timeOption, index) => {
                      const formattedTime = formatTime(timeOption);
                      return (
                        <option key={index} value={timeOption}>
                          {formattedTime}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form__question">
                  <label>Intake Window (+/- hours)</label>
                  <input type="number" placeholder="2" min="0" onChange={(e) => handleRegimenUpdate(e.target.value, "threshold", index)} />
                </div>
              </div>
            </div>
          </div>
        ))}

        <h3>Medication Regimen Preview</h3>
        <div className="form__section">
          <WeeklyStats regimen={patient.regimen} emptyState={1} />
        </div>
        <div className="form__buttons">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setNumMedications((prevNum) => prevNum + 1);
              setPatient((prev) => ({
                ...prev,
                regimen: [...prev.regimen, { ...defaultPatientData.regimen[0] }],
              }));
            }}
            iconName={"plusIcon"}
            colour={"lightTheme"}
          >
            Add Medication
          </Button>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
