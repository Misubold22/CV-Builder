import { SkillDeleteButton } from "../common/IconButton.jsx";
import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SkillsHistory({ skills, setSkills }) {
  const handleSkillDelete = (id) => {
    const updatedJobList = skills.filter((job) => job.id !== id);
    setSkills(updatedJobList);
  };

  const handleCategoryChange = (e, id) => {
    const { value } = e.target;
    setSkills((category) =>
      category?.map((list, index) =>
        index === id ? { ...list, category: value } : list,
      ),
    );
  };

  const handleSkillsChange = (e, id) => {
    const { value } = e.target;
    setSkills((skills) =>
      skills?.map((list, index) =>
        index === id ? { ...list, skills: value } : list,
      ),
    );
  };

  return (
    <>
      <AnimatePresence>
        {skills.map((skillData, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key={skillData.id}
          >
            <Fragment key={skillData.id}>
              <div className="skills-container">
                <div className="skills-form-group">
                  <input
                    type="text"
                    id={skillData.category}
                    name="category"
                    value={skillData.category}
                    onChange={(e) => handleCategoryChange(e, i)}
                    placeholder="Enter your category"
                  />
                </div>

                <div className="skills-form-group">
                  <input
                    type="text"
                    name="skills"
                    id={skillData.skills}
                    value={skillData.skills}
                    onChange={(e) => handleSkillsChange(e, i)}
                    placeholder="Enter your skills"
                  />
                </div>

                <div className="del-button-container">
                  <SkillDeleteButton
                    onClick={() => handleSkillDelete(skillData.id)}
                  />
                </div>
              </div>
            </Fragment>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
