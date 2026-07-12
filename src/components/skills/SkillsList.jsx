import { capitalizeFirstLetter } from "../../utils";

export function SkillsList({ skills }) {
  const listItems = skills.map((skillCategory) => (
    <li key={skillCategory.id}>
      <div className="timeline-block">
        <div className="time-container">
          <h5>{capitalizeFirstLetter(skillCategory.category)}</h5>
          <h5 className="userSkillsHeader">{skillCategory.skills}</h5>
        </div>
      </div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
