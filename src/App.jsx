import "./App.css";
import { useState } from "react";
import { CustomButton } from "./components/common/CustomButton.jsx";
import { ProfilePicture } from "./components/personal/ProfilePicture.jsx";
import { PersonalDetails } from "./components/personal/PersonalDetails.jsx";
import { EmploymentHistory } from "./components/employment/EmploymentHistory.jsx";
import { EmploymentCard } from "./components/employment/EmploymentCard.jsx";
import { EmploymentHistoryForm } from "./components/employment/EmploymentHistoryForm.jsx";
import { ResumePreview } from "./components/preview/ResumePreview.jsx";

//

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

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
          <EmploymentCard />
          {isHidden && (
            <EmploymentHistoryForm
              isHidden={!isHidden}
              setIsHidden={setIsHidden}
              onStartDateChange={setStartDate}
              selectedStartDate={startDate}
              selectedEndDate={endDate}
              onEndDateChange={setEndDate}
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
          startDateValue={startDate}
          endDateValue={endDate}
        />

        <p>
          This is the right side of the split layout.
          <br />
          can add your content here.
        </p>
      </div>
    </div>
  );
}

export default App;
