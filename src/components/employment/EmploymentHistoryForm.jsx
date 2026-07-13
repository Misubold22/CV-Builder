import { CustomButton } from "../common/CustomButton.jsx";
import { useState } from "react";
import { GenerateId } from "../../utils";

export function EmploymentHistoryForm({ isHidden, setIsHidden, handleSubmit }) {
  const handleChanges = () => {
    setIsHidden(isHidden);
  };

  const [jobrole, setJobRole] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!jobrole.trim() || !employer.trim()) return;

    const newJob = {
      jobrole: e.target.jobrole.value,
      employer: e.target.employer.value,
      startDate: e.target.startdate.value,
      endDate: e.target.enddate.value,
      city: e.target.city.value,
      jobDescription: e.target.jobDescription.value,
      id: GenerateId(),
    };

    handleSubmit(newJob);
    setJobRole("");
    setEmployer("");
    setStartDate("");
    setEndDate("");
    setIsHidden(isHidden);
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        style={{ display: isHidden ? "none" : "block" }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="jobrole">Job Role:</label>
            <input
              type="text"
              name="jobrole"
              id="jobrole"
              value={jobrole}
              onChange={(e) => setJobRole(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employer">Employer:</label>
            <input
              type="text"
              name="employer"
              id="employer"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
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
            />{" "}
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
            <label htmlFor="jobDescription">Description</label>

            <textarea
              id="jobDescription"
              name="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
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
      </form>
    </>
  );
}
