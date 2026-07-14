import { CustomButton } from "../common/CustomButton.jsx";
import { motion } from "framer-motion";

export function EditEmploymentHistoryForm({
  isHidden,
  setIsHidden,
  handleSubmit,
  editingJobId,
  form,
  setForm,
}) {
  const submitForm = (e) => {
    e.preventDefault();
    if (!form.jobrole.trim() || !form.employer.trim()) return;

    const newEditJob = {
      ...form,
      id: editingJobId,
    };

    handleSubmit(newEditJob);
    console.log(newEditJob);
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
            <label htmlFor="jobrole">Job Role:</label>
            <input
              type="text"
              name="jobrole"
              id="jobrole"
              value={form.jobrole}
              onChange={(e) => setForm({ ...form, jobrole: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employer">Employer:</label>
            <input
              type="text"
              name="employer"
              id="employer"
              value={form.employer}
              onChange={(e) => setForm({ ...form, employer: e.target.value })}
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
            <label htmlFor="jobDescription">Description</label>

            <textarea
              id="jobDescription"
              type="text"
              name=" jobDescription"
              value={form.jobDescription}
              onChange={(e) =>
                setForm({ ...form, jobDescription: e.target.value })
              }
              placeholder="I did a lot of things!"
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
