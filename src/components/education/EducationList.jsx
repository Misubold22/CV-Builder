import { ConvertToDisplayDate } from "../../utils/dateUtils.js";
import { capitalizeFirstLetter, toTitleCase } from "../../utils";

export function EducationList({ education }) {
  const listItems = education.map((edu) => (
    <li key={edu.id}>
      <div className="timeline-block">
        <div className="time-container">
          <h3 className="section-title">{toTitleCase(edu.school)}</h3>
          <time>
            {" "}
            {ConvertToDisplayDate(edu.startDate)} -
            {ConvertToDisplayDate(edu.endDate)}
          </time>
        </div>
        <div className="university-container">
          <h4>
            {toTitleCase(edu.city)} - {toTitleCase(edu.degree)}
          </h4>
        </div>
        <p className="timeline-p">
          {" "}
          {capitalizeFirstLetter(edu.educationDescription)}
        </p>{" "}
      </div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
