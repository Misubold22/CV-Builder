import { EditButton, DeleteButton } from "../common/IconButton.jsx";

import { toTitleCase, ConvertToDisplayDate } from "../../utils";

export function EmploymentCard({ person, handleEditingJob, handleJobDelete }) {
  return (
    <div className="card" key={person.id}>
      <div className="card-details">
        <h3 className="job-role">
          {toTitleCase(person.jobrole)} at {toTitleCase(person.employer)}
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
