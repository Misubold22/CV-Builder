import { DeleteButton, SkillDeleteButton } from "../common/IconButton.jsx";

import { Fragment } from "react";
function PersonalDetailsInputForm({
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  autoComplete = "true",
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </>
  );
}

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
              <PersonalDetailsInputForm
                type="text"
                id="category"
                name="category"
                value={skillData.category}
                onChange={(e) => handleCategoryChange(e, i)}
                placeholder="Enter your category"
              />
            </div>

            <div className="skills-form-group">
              <PersonalDetailsInputForm
                type="text"
                id="skills"
                name="skills"
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
