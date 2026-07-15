import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  pastEducation,
  pastJobs,
  pastSkills,
  pastLanguages,
  defaultUserData,
} from "./data";
import defaultProfilePic from "./assets/defaultProfilePic.jpg";
import { ProfilePicture } from "./components/personal/ProfilePicture.jsx";
import { PersonalDetails } from "./components/personal/PersonalDetails.jsx";
import {
  EmploymentCard,
  EmploymentHistoryForm,
  EditEmploymentHistoryForm,
  EmploymentList,
} from "./components/employment";
import {
  CustomButton,
  SectionHeader,
  DownloadCVButton,
} from "./components/common";
import {
  EducationCard,
  EducationHistoryForm,
  EditEducationHistoryForm,
  EducationList,
} from "./components/education";
import {
  SkillsHistory,
  SkillsForm,
  SkillsList,
  SkillsLabels,
} from "./components/skills";
import {
  LanguageForm,
  LanguageCard,
  LanguagesList,
} from "./components/languages";
import { capitalizeFirstLetter, toTitleCase } from "./utils";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

function App() {
  const [inputs, setInputs] = useState(defaultUserData);
  const [profilePreview, setProfilePreview] = useState(defaultProfilePic);
  const [isHidden, setIsHidden] = useState(false);

  const handleChange = () => {
    setIsHidden((prev) => !prev);
  };

  const [isEditHidden, setIsEditHidden] = useState(false);
  const [jobs, setJobs] = useState(pastJobs);

  const handleSubmit = (job) => {
    setJobs([...jobs, job]);
  };

  const [editingJobId, setJobId] = useState(null);

  const [form, setForm] = useState({
    jobrole: "",
    employer: "",
    startDate: "",
    endDate: "",
    city: "",
    jobDescription: "",
  });

  function handleEditingJob(id) {
    const job = jobs.find((j) => j.id === id);
    setIsEditHidden((prev) => !prev);
    setForm(job);
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

  const [skills, setSkills] = useState([...pastSkills]);
  const [isSkillsFormHidden, setIsSkillsFormHidden] = useState(false);

  const handleSklillsFormChange = () => {
    setIsSkillsFormHidden((prev) => !prev);
  };

  const handleSkillsSubmit = (skill) => {
    setSkills([...skills, skill]);
  };

  const [isEduFormHidden, setIsEduFormHidden] = useState(false);

  const handleValueChange = () => {
    setIsEduFormHidden((prev) => !prev);
  };

  const [isEduEditHidden, setIsEduEditHidden] = useState(false);
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

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <div className="split-container">
        <div className="split-left">
          <div className="left-wrapper">
            <h1 className="resume-builder-header">Resume builder</h1>
            <form className="responsive-form">
              <SectionHeader title="Personal Details" />
              <PersonalDetails inputs={inputs} setInputs={setInputs} />
              <ProfilePicture setProfilePreview={setProfilePreview} />
            </form>
            <SectionHeader title="Employment History " />
            <AnimatePresence>
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <EmploymentCard
                    handleEditingJob={handleEditingJob}
                    handleJobDelete={handleJobDelete}
                    person={job}
                  />

                  <AnimatePresence mode="wait">
                    {isEditHidden && editingJobId === job.id && (
                      <EditEmploymentHistoryForm
                        isHidden={false}
                        setIsHidden={setIsEditHidden}
                        handleSubmit={handleEditSubmit}
                        editingJobId={editingJobId}
                        jobs={jobs}
                        form={form}
                        setForm={setForm}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {isHidden && (
                <EmploymentHistoryForm
                  isHidden={false}
                  setIsHidden={setIsHidden}
                  handleSubmit={handleSubmit}
                />
              )}
            </AnimatePresence>
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
            <SectionHeader title="Education " />
            <AnimatePresence>
              {education.map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <EducationCard
                    handleEditingJob={handleEducationEdit}
                    handleJobDelete={handleEducationDelete}
                    person={study}
                  />

                  <AnimatePresence mode="wait">
                    {isEduEditHidden && editingEducationId === study.id && (
                      <EditEducationHistoryForm
                        isHidden={false}
                        setIsHidden={setIsEduEditHidden}
                        handleSubmit={handleEducationEditSubmit}
                        editingJobId={editingEducation}
                        jobs={education}
                        form={educationForm}
                        setForm={setEducationForm}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {isEduFormHidden && (
                <EducationHistoryForm
                  isHidden={false}
                  setIsHidden={setIsEduFormHidden}
                  handleSubmit={handleEducationSubmit}
                />
              )}
            </AnimatePresence>
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
            <SectionHeader title="Skills" />
            <SkillsLabels />
            <SkillsHistory skills={skills} setSkills={setSkills} />
            <AnimatePresence>
              <AnimatePresence mode="wait">
                {isSkillsFormHidden && (
                  <SkillsForm
                    isHidden={false}
                    setIsHidden={setIsSkillsFormHidden}
                    handleSubmit={handleSkillsSubmit}
                  />
                )}{" "}
              </AnimatePresence>
            </AnimatePresence>
            <div
              className="skills-btn-containter"
              style={{ display: isSkillsFormHidden ? "none" : "block" }}
            >
              <CustomButton
                className="custom-btn"
                label="Add Skill"
                onClick={handleSklillsFormChange}
              />
            </div>
            <SectionHeader title="Languages" />
            <AnimatePresence>
              <LanguageForm handleSubmit={handleLanguageSubmit} />
            </AnimatePresence>
            <div className="languageBtn-containter">
              <AnimatePresence>
                {newLanguage.map((lang) => (
                  <motion.div
                    key={lang.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <LanguageCard
                      handleLanguageDelete={handleLanguageDelete}
                      lang={lang}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="split-right">
          <div className="resume-layout" ref={componentRef}>
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
                <h2 className="contact-header"> Contact</h2>
                <address>
                  <p className="sidebar-title">
                    {" "}
                    <FaLocationDot /> Address
                  </p>
                  <p className="sidebar-paragraph">
                    {toTitleCase(inputs.address)}
                  </p>

                  <p className="sidebar-title">
                    {" "}
                    <FaPhoneAlt /> Phone
                  </p>
                  <p className="sidebar-paragraph">{inputs.phone}</p>

                  <p className="sidebar-title">
                    {" "}
                    <SiMinutemailer /> Email
                  </p>
                  <p className="sidebar-paragraph">{inputs.email}</p>

                  <p className="sidebar-title">
                    {" "}
                    <ImLinkedin /> Linkedin
                  </p>
                  <p className="sidebar-paragraph">{inputs.linkedin}</p>

                  <p className="sidebar-title">
                    {" "}
                    <FaGithub /> Portfolio
                  </p>
                  <p className="sidebar-paragraph">{inputs.portfolio}</p>
                </address>
              </section>
              <section className="language-section">
                <h2 className="contact-header">Languages</h2>

                <LanguagesList jobs={newLanguage} />
              </section>
            </aside>
            <main className="resume-content">
              {" "}
              <div className="downloadBtn-container">
                <DownloadCVButton onClick={handlePrint} />
              </div>{" "}
              <h1 className="profile-header">
                {capitalizeFirstLetter(inputs.firstname)}{" "}
                {capitalizeFirstLetter(inputs.lastname)}
              </h1>
              <h2 className="occupation-header">
                {toTitleCase(inputs.occupation)}
              </h2>
              <p className="profile-summary">
                {capitalizeFirstLetter(inputs.about)}
              </p>
              <SectionHeader headerClassName="main-header" title="Employment" />
              <section className="experience-section">
                <EmploymentList jobs={jobs} />
              </section>
              <SectionHeader headerClassName="main-header" title="Education" />
              <section className="education-section">
                <EducationList education={education} />
              </section>
              <SectionHeader headerClassName="main-header" title="Skills" />
              <section className="skills-section">
                <SkillsList skills={skills} />
              </section>{" "}
            </main>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
