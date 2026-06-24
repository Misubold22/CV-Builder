import "./App.css";
import { useState } from "react";
import { CustomButton } from "./components/common/CustomButton.jsx";
import { ProfilePicture } from "./components/personal/ProfilePicture.jsx";
import { PersonalDetails } from "./components/personal/PersonalDetails.jsx";
import { EmploymentHistory } from "./components/employment/EmploymentHistory.jsx";
import { EmploymentCard } from "./components/employment/EmploymentCard.jsx";
import { EmploymentHistoryForm } from "./components/employment/EmploymentHistoryForm.jsx";
import { EditEmploymentHistoryForm } from "./components/employment/EditEmploymentHistoryForm.jsx";
import { ResumePreview } from "./components/preview/ResumePreview.jsx";
import { ConvertToDisplayDate } from "./components/utils/dateUtils.js";

function EmploymentList({ jobs }) {
  const listItems = jobs.map((job) => (
    <li key={job.id}>
      <p className="date">Job este: {job.jobrole}</p>{" "}
      <p className="date">Employer este: {job.employer}</p>{" "}
      <p className="date">
        {" "}
        {ConvertToDisplayDate(job.startDate)} -
        {ConvertToDisplayDate(job.endDate)}
      </p>{" "}
      <p className="date">ID este: {job.id}</p>{" "}
      <p className="date">Description: {job.jobDescription}</p>{" "}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function App() {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    occupation: "",
    linkedin: "",
    portfolio: "",
    about: "",
  });

  const [profilePreview, setProfilePreview] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const handleChange = () => {
    setIsHidden(!isHidden);
  };

  const [isEditHidden, setIsEditHidden] = useState(false);

  const pastJobs = [
    {
      id: 0,
      jobrole: "Web Developer",
      employer: "Startup Inc.",
      startDate: "2021-06-05",
      endDate: "2024-03-15",
      jobDescription:
        "Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Implemented backend functionality using Python and Django. Collaborated with designers and project managers to ensure on-time delivery of projects.",
    },
    {
      id: 1,
      jobrole: "Junior Web Developer ",
      employer: "Acme Inc.",
      startDate: "2024-06-05",
      endDate: "2026-03-15",
      jobDescription:
        "Developed and maintained web applications using HTML, CSS, and JavaScript. Troubleshooted and resolved bugs to ensure smooth website operation.",
    },
  ];

  const [jobs, setJobs] = useState(pastJobs);

  const handleSubmit = (job) => {
    setJobs([...jobs, job]);
  };

  const [editingJob, setEditingJob] = useState(null);
  const [editingJobId, setJobId] = useState(null);

  const [form, setForm] = useState({
    jobrole: "",
    employer: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  });

  function handleEditingJob(id) {
    const job = jobs.find((j) => j.id === id);
    setIsEditHidden(!isEditHidden);
    setForm(job);
    setEditingJob(id);
    setJobId(id);
  }

  const handleJobDelete = (id) => {
    const updatedJobList = jobs.filter((job) => job.id !== id);

    setJobs(updatedJobList);
  };

  const handleEditSubmit = (job) => {
    setJobs(
      jobs.map((t) => {
        if (t.id === job.id) {
          return job;
        } else {
          return t;
        }
      }),
    );
  };

  return (
    <div className="split-container">
      <div className="split-left">
        <div className="left-wrapper">
          <h1>Resume builder</h1>
          <form className="responsive-form">
            <PersonalDetails inputs={inputs} setInputs={setInputs} />
            <ProfilePicture setProfilePreview={setProfilePreview} />
          </form>
          <EmploymentHistory />
          {jobs.map((job) => (
            <div key={job.id}>
              <EmploymentCard
                handleEditingJob={handleEditingJob}
                handleJobDelete={handleJobDelete}
                person={job}
              />

              {editingJobId === job.id && (
                <EditEmploymentHistoryForm
                  isHidden={!isEditHidden}
                  setIsHidden={setIsEditHidden}
                  handleSubmit={handleEditSubmit}
                  editingJobId={editingJob}
                  jobs={jobs}
                  form={form}
                  setForm={setForm}
                />
              )}
            </div>
          ))}

          {isHidden && (
            <EmploymentHistoryForm
              isHidden={!isHidden}
              setIsHidden={setIsHidden}
              handleSubmit={handleSubmit}
            />
          )}

          <div
            className="btn-containter"
            style={{ display: isHidden ? "none" : "block" }}
          >
            <CustomButton
              className="custom-btn"
              label="Add Employment"
              onClick={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="split-right">
        <h1>Right Section</h1>
        <ResumePreview
          firstname={inputs.firstname}
          lastname={inputs.lastname}
          phone={inputs.phone}
          email={inputs.email}
          address={inputs.address}
          occupation={inputs.occupation}
          linkedin={inputs.linkedin}
          portfolio={inputs.portfolio}
          about={inputs.about}
          file={profilePreview}
          //   {listItems};
        />
        <EmploymentList jobs={jobs} />

        <p>
          This is the right side of the split layout.
          <br />
          can add content here.
        </p>
      </div>
    </div>
  );
}

export default App;
