import { CustomButton } from "../common/CustomButton.jsx";
import { useState } from "react";
import { GenerateId } from "../../utils";
import { motion } from "framer-motion";

export function EducationHistoryForm({ isHidden, setIsHidden, handleSubmit }) {
  const handleChanges = () => {
    setIsHidden(isHidden);
  };

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState("");
  const [educationDescription, setEducationDescription] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!school.trim() || !degree.trim()) return;

    const newEducation = {
      school: e.target.school.value,
      degree: e.target.degree.value,
      startDate: e.target.startdate.value,
      endDate: e.target.enddate.value,
      city: e.target.city.value,
      educationDescription: e.target.educationDescription.value,
      id: GenerateId(),
    };

    handleSubmit(newEducation);
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setCity("");
    setEducationDescription("");
    setIsHidden(isHidden);
  };

  return (
    <>
      <motion.form
        onSubmit={submitForm}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="school">School / University:</label>
            <input
              type="text"
              id="school"
              name="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startdate">Start Date:</label>

            <input
              id="startdate"
              type="date"
              name="startdate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="enddate">End Date:</label>

            <input
              id="enddate"
              type="date"
              name="enddate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>

            <input
              id="city"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="educationDescription">Description</label>

            <textarea
              id="educationDescription"
              name="educationDescription"
              value={educationDescription}
              onChange={(e) => setEducationDescription(e.target.value)}
              placeholder="I did a lot of things!"
              rows={2}
            />
          </div>
        </div>

        <div className="submitBtn-containter">
          <button className="submit-btn" type="submit">
            Save
          </button>
          <CustomButton
            className="cancel-btn"
            label="Cancel"
            onClick={handleChanges}
          />
        </div>
      </motion.form>
    </>
  );
}
