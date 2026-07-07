import "./App.css";
import { useState } from "react";
import { CustomButton } from "./components/common/CustomButton.jsx";
import { SectionHeader } from "./components/common/SectionHeader.jsx";
import { ProfilePicture } from "./components/personal/ProfilePicture.jsx";
import { PersonalDetails } from "./components/personal/PersonalDetails.jsx";
import { EmploymentCard } from "./components/employment/EmploymentCard.jsx";
import { EmploymentHistoryForm } from "./components/employment/EmploymentHistoryForm.jsx";
import { EditEmploymentHistoryForm } from "./components/employment/EditEmploymentHistoryForm.jsx";
import { SkillsHistory } from "./components/skills/SkillsHistory.jsx";
import { SkillsForm } from "./components/skills/SkillsForm.jsx";
import { EditEducationHistoryForm } from "./components/education/EditEducationHistoryForm.jsx";
import { EducationHistoryForm } from "./components/education/EducationHistoryForm.jsx";
import { EducationCard } from "./components/education/EducationCard.jsx";
import { LanguageForm } from "./components/languages/LanguageForm.jsx";
import { LanguageCard } from "./components/languages/LanguageCard.jsx";
import { ResumePreview } from "./components/preview/ResumePreview.jsx";
import { ConvertToDisplayDate } from "./components/utils/dateUtils.js";
import { motion } from "framer-motion";
import { usePDF } from "react-to-pdf";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { DownloadCVButton } from "./components/common/IconButton.jsx";

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

function LanguagesList({ jobs }) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const listItems = jobs.map((l) => (
    <li key={l.id}>
      <p className="date">Language : {capitalize(l.language)}</p>{" "}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function SkillsList({ languages }) {
  const listItems = languages.map((job) => (
    <li key={job.id}>
      <p className="date">Category : {job.category}</p>{" "}
      <p className="date">Skill este: {job.skills}</p>{" "}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export function SkillsLabels() {
  return (
    <>
      <div className="header-container">
        <div className="categories-container">
          <h3 className="categoriesHeader">Categories:</h3>
        </div>
        <div className="skill-container">
          <h3 className="skillsHeader">Skills:</h3>
        </div>
      </div>
    </>
  );
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
  //
  // const handlePrint = () => window.print();
  //const btnPrint = document.getElementById("print");
  //console.log(btnPrint);
  // (onClick='handlePrint()')
  //

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

  //

  const pastSkills = [
    {
      id: 0,
      category: "Programming Languages",
      skills: "HTML, CSS, Javascript",
    },
    {
      id: 1,
      category: "Cloud services",
      skills: "Amazon Web Services, Google Cloud Platform",
    },
  ];

  const [skills, setSkills] = useState([...pastSkills]);

  const [isSkillsFormHidden, setIsSkillsFormHidden] = useState(false);
  const handleSklillsFormChange = () => {
    setIsSkillsFormHidden(!isSkillsFormHidden);
  };
  const handleSkillsSubmit = (skill) => {
    setSkills([...skills, skill]);
    console.log(skills.map((skill) => skill.category));
    console.log(skills.map((skill) => skill.skills));
  };
  //
  const resumeCategory = skills.map((skill) => skill.category + " ");
  const resumeSkills = skills.map((skill) => skill.skills + " ");

  //
  const [isEduFormHidden, setIsEduFormHidden] = useState(false);
  const handleValueChange = () => {
    setIsEduFormHidden(!isEduFormHidden);
  };
  //

  const [isEduEditHidden, setIsEduEditHidden] = useState(false);

  const pastEducation = [
    {
      id: 0,
      school: "University of California",
      degree: "Bsc. Computer Science",
      startDate: "2018-10-01",
      endDate: "2021-07-15",
      city: "Berkeley, California",
      educationDescription:
        "Specialized in software engineering and cloud computing, with research focused on scalable web applications and distributed systems.",
    },
    {
      id: 1,
      school: "University of California",
      degree: "MSc. Computer Science",
      startDate: "2021-10-01",
      endDate: "2023-07-15",
      city: "Berkeley, California",
      educationDescription:
        "Completed advanced coursework in software engineering, distributed systems, and machine learning. Conducted research on scalable web applications and developed a thesis project focused on cloud-native application architectures.",
    },
  ];

  const [education, setEducation] = useState(pastEducation);

  const handleEducationSubmit = (ed) => {
    setEducation([...education, ed]);
  };

  const [editingEducation, setEditingEducation] = useState(null);
  const [editingEducationId, setEducationId] = useState(null);

  const [educationForm, setEducationForm] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
    educationDescription: "",
  });

  function handleEducationEdit(id) {
    const foundEducation = education.find((j) => j.id === id);
    setIsEduEditHidden(!isEduEditHidden);
    setEducationForm(foundEducation);
    setEditingEducation(id);
    setEducationId(id);
  }

  const handleEducationDelete = (id) => {
    const updatedEduList = education.filter((job) => job.id !== id);

    setEducation(updatedEduList);
  };

  const handleEducationEditSubmit = (job) => {
    setEducation(
      education.map((t) => {
        if (t.id === job.id) {
          return job;
        } else {
          return t;
        }
      }),
    );
  };

  //

  const pastLanguages = [
    {
      id: 0,
      language: "english",
    },
    {
      id: 1,
      language: "french",
    },

    {
      id: 2,
      language: "spanish",
    },
  ];

  const [newLanguage, setNewLanguage] = useState(pastLanguages);

  const handleLanguageSubmit = (language) => {
    setNewLanguage([...newLanguage, language]);
  };

  const handleLanguageDelete = (id) => {
    const updatedLanguageList = newLanguage.filter(
      (language) => language.id !== id,
    );

    setNewLanguage(updatedLanguageList);
  };

  const { toPDF, targetRef } = usePDF({
    filename: "simple-CV.pdf",
    method: "open",

    resolution: Resolution.MEDIUM,
    format: "A4",
    //format: "letter",
    orientation: "portrait",
    //orientation: "landscape",
  });

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  return (
    <div className="split-container">
      <div className="split-left">
        <div className="left-wrapper">
          <h1>Resume builder</h1>
          <form className="responsive-form">
            <SectionHeader title="Personal Details" />
            <PersonalDetails inputs={inputs} setInputs={setInputs} />
            <ProfilePicture setProfilePreview={setProfilePreview} />
          </form>
          <SectionHeader title="Employment History " />
          {jobs.map((job) => (
            <motion.div key={job.id}>
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
            </motion.div>
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
          <SectionHeader title="Skills" />
          <SkillsLabels />
          <SkillsHistory skills={skills} setSkills={setSkills} />
          {isSkillsFormHidden && (
            <SkillsForm
              isHidden={!isSkillsFormHidden}
              setIsHidden={setIsSkillsFormHidden}
              handleSubmit={handleSkillsSubmit}
            />
          )}
          <div
            className="btn-containter"
            style={{ display: isSkillsFormHidden ? "none" : "block" }}
          >
            <CustomButton
              className="custom-btn"
              label="Add Skill"
              onClick={handleSklillsFormChange}
            />
          </div>
          <SectionHeader title="Education " />
          {education.map((study) => (
            <motion.div key={study.id}>
              <EducationCard
                handleEditingJob={handleEducationEdit}
                handleJobDelete={handleEducationDelete}
                person={study}
              />

              {editingEducationId === study.id && (
                <EditEducationHistoryForm
                  isHidden={!isEduEditHidden}
                  setIsHidden={setIsEduEditHidden}
                  handleSubmit={handleEducationEditSubmit}
                  editingJobId={editingEducation}
                  jobs={education}
                  form={educationForm}
                  setForm={setEducationForm}
                />
              )}
            </motion.div>
          ))}
          {isEduFormHidden && (
            <EducationHistoryForm
              isHidden={!isEduFormHidden}
              setIsHidden={setIsEduFormHidden}
              handleSubmit={handleEducationSubmit}
            />
          )}
          <div
            className="btn-containter"
            style={{ display: isEduFormHidden ? "none" : "block" }}
          >
            <CustomButton
              className="custom-btn"
              label="Add Education"
              onClick={handleValueChange}
            />
          </div>{" "}
          <SectionHeader title="Languages" />
          <LanguageForm handleSubmit={handleLanguageSubmit} />
          <div className="languageBtn-containter">
            {newLanguage.map((lang) => (
              <div key={lang.id}>
                <LanguageCard
                  handleLanguageDelete={handleLanguageDelete}
                  lang={lang}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="split-right" ref={componentRef}>
        <div className="left-sidebar-flexbox">
          <aside className="resume-sidebar">
            <figure className="profile-picture">
              {" "}
              {profilePreview && (
                <img
                  src={profilePreview}
                  alt="profile preview"
                  className="profile-preview"
                />
              )}
            </figure>{" "}
            <section className="contact-section">
              <h2 className="contact-header">Contact</h2>

              <address>
                <p className="sidebar-paragraph">Kaohsiung, Taiwannnnnnn</p>
                <p className="sidebar-paragraph">(+886) 888-888-888777777</p>
                <p className="sidebar-paragraph">{inputs.email}</p>
                <p className="sidebar-paragraph">LinkedIn</p>
                <p className="sidebar-paragraph">Portfolio</p>
              </address>
            </section>
            <section className="language-section">
              <h2 className="contact-header">Languages</h2>
              <p className="sidebar-paragraph">Language1</p>
              <p className="sidebar-paragraph">Language2</p>
              <p className="sidebar-paragraph">Language3</p>
            </section>
          </aside>
          <main className="main-content">
            {" "}
            <div className="downloadBtn-container">
              <DownloadCVButton onClick={handlePrint} />
            </div>{" "}
            MAIN SECTION
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
