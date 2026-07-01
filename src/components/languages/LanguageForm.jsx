import { useState } from "react";
import { IoEnter } from "react-icons/io5";
import { IconContext } from "react-icons";

function GenerateId() {
  // return crypto.randomUUID();
  return Math.floor(Math.random() * 100);
}

function EnterIcon() {
  return (
    <>
      <IconContext.Provider value={{ size: "25px" }}>
        <div className="enter-icon-wrapper">
          <IoEnter />
        </div>
      </IconContext.Provider>
    </>
  );
}

export function LanguageForm({ handleSubmit }) {
  const [language, setLanguage] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    if (!language.trim()) return;

    const newLangage = {
      language: e.target.school.value,

      id: GenerateId(),
    };

    handleSubmit(newLangage);
    setLanguage("");
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="form-row">
          <div className="language-form-group">
            <EnterIcon />
            <input
              type="text"
              id="language"
              name="school"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="Enter language..."
            />
          </div>
        </div>
      </form>
    </>
  );
}
