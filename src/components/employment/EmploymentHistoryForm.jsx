import { CustomButton } from "../common/CustomButton.jsx";
import { EmploymentDate } from "./EmploymentDate.jsx";

export function EmploymentHistoryForm({
  isHidden,
  setIsHidden,
  onStartDateChange,
  selectedStartDate,
  onEndDateChange,
  selectedEndDate,
}) {
  // e.preventDefault();
  //console.log("Button clicked!");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleChanges = () => {
    setIsHidden(isHidden);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: isHidden ? "none" : "block" }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="jobrole">Job Role:</label>
            <input type="text" id="jobrole" name="jobrole" />
          </div>
          <div className="form-group">
            <label htmlFor="employer">Employer:</label>
            <input type="text" id="employer" name="employer" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startdate">Start Date:</label>

            <EmploymentDate
              selectedDate={selectedStartDate}
              onStartDateChange={onStartDateChange}
              id={"startdate"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="enddate">End Date:</label>

            <EmploymentDate
              selectedDate={selectedEndDate}
              onStartDateChange={onEndDateChange}
              id={"enddate"}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="description">Description</label>

            <textarea
              id="description"
              name="about"
              /* T    value={inputs.about}
                onChange={handleChange} */
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
