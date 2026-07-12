import { ConvertToDisplayDate } from "../../utils/dateUtils.js";
import { capitalizeFirstLetter, toTitleCase } from "../../utils";

export function EmploymentList({ jobs }) {
  const listItems = jobs.map((job) => (
    <li key={job.id}>
      <div className="timeline-block">
        <div className="time-container">
          <h3 className="section-title">{toTitleCase(job.jobrole)}</h3>
          <time>
            {" "}
            {ConvertToDisplayDate(job.startDate)} -
            {ConvertToDisplayDate(job.endDate)}
          </time>
        </div>
        <h4>
          {toTitleCase(job.city)} - {toTitleCase(job.employer)}
        </h4>
        <p className="timeline-p">
          {" "}
          {capitalizeFirstLetter(job.jobDescription)}
        </p>{" "}
      </div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
