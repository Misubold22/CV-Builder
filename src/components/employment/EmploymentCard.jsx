import { EditButton, DeleteButton } from "../common/IconButton.jsx";
import { ConvertToDisplayDate } from "../utils/dateUtils.js";

export function EmploymentCard({ person, handleEditingJob, handleJobDelete }) {
  return (
    <div className="card" key={person.id}>
      <div className="card-details">
        <h3 className="job-role">
          {person.jobrole} at {person.employer}
        </h3>
        <p className="job-date">
          {" "}
          {ConvertToDisplayDate(person.startDate)} -{" "}
          {ConvertToDisplayDate(person.endDate)}
        </p>
      </div>
      <div className="button-container">
        {" "}
        <DeleteButton onClick={() => handleJobDelete(person.id)} />
        <EditButton onClick={() => handleEditingJob(person.id)} />
      </div>
    </div>
  );
}
