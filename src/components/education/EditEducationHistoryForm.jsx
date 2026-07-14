import { CustomButton } from "../common/CustomButton.jsx";
import { motion } from "framer-motion";

export function EditEducationHistoryForm({
  isHidden,
  setIsHidden,
  handleSubmit,
  editingJobId,
  form,
  setForm,
}) {
  console.log(editingJobId);
  const submitForm = (e) => {
    if (!form.school.trim() || !form.degree.trim()) return;

    e.preventDefault();

    const newJob = {
      ...form,
      id: editingJobId,
    };

    handleSubmit(newJob);
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
              value={form.school}
              onChange={(e) => setForm({ ...form, school: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Dregree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={form.degree}
              onChange={(e) => setForm({ ...form, degree: e.target.value })}
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
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="enddate">End Date:</label>
            <input
              id="enddate"
              type="date"
              name="enddate"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>

            <input
              id="city"
              name="city"
              type="text"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="educationDescription">Description</label>
            <textarea
              id="educationDescription"
              name="educationDescription"
              type="text"
              value={form.educationDescription}
              onChange={(e) =>
                setForm({ ...form, educationDescription: e.target.value })
              }
              placeholder="I' ve studied a lot of things!"
              rows={4}
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
            onClick={() => setIsHidden(isHidden)}
          />
        </div>
      </motion.form>
    </>
  );
}
