import { IconButton } from "../common/IconButton.jsx";
import { ConvertToDisplayDate } from "../utils/dateUtils.js";

export function EmploymentCard({ people }) {
  const listItems = people.map((person) => (
    <div className="card" key={person.id}>
      <div className="card-details">
        <h3 className="job-role">
          {person.jobrole} at {person.employer}
        </h3>
        <p className="job-date">
          {ConvertToDisplayDate(person.startDate)} -{" "}
          {ConvertToDisplayDate(person.endDate)}
        </p>
      </div>
      <div className="button-container">
        {" "}
        <IconButton />
      </div>
    </div>
  ));

  return <>{listItems}</>;
}
