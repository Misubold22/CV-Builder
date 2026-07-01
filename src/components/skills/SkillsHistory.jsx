import { DeleteButton, SkillDeleteButton } from "../common/IconButton.jsx";
import { Fragment } from "react";

export function SkillsCard({ skillsForm, handleJobDelete }) {
  console.log(skillsForm.category, skillsForm.skills);
  return (
    <div className="card" key={skillsForm.id}>
      <div className="card-details">
        <h3 className="job-role">
          Categories: {skillsForm.category} Skills {skillsForm.skills} Id:
          {skillsForm.id}
        </h3>
      </div>
      <div className="button-container">
        {" "}
        <DeleteButton onClick={() => handleJobDelete(skillsForm.id)} />
      </div>
    </div>
  );
}

export function SkillsHistory({ skills, setSkills }) {
  const handleJobDelete = (id) => {
    const updatedJobList = skills.filter((job) => job.id !== id);
    setSkills(updatedJobList);
    console.log(updatedJobList);
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
  //console.log(skills.map((skill) => skill.category));

  return (
    <>
      {skills.map((skillData, i) => (
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
                onClick={() => handleJobDelete(skillData.id)}
              />
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
}
