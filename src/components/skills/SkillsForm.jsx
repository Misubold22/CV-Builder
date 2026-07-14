import { CustomButton } from "../common/CustomButton.jsx";
import { useState } from "react";
import { GenerateId } from "../../utils";
import { motion } from "framer-motion";

export function SkillsForm({ isHidden, setIsHidden, handleSubmit }) {
  const handleChanges = () => {
    setIsHidden(isHidden);
  };

  const [category, setCategory] = useState("");
  const [skill, setSkill] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!category.trim() || !skill.trim()) return;

    const newSkills = {
      category: e.target.category.value,
      skills: e.target.skill.value,
      id: GenerateId(),
    };

    handleSubmit(newSkills);
    setCategory("");
    setSkill("");
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
            <label htmlFor="category">Categories:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="skill">Skills:</label>
            <input
              type="text"
              name="skill"
              id="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
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
