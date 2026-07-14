import { useState } from "react";
import { GenerateId } from "../../utils";
import { motion } from "framer-motion";
import { EnterIcon } from "../../components/common";

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
      <motion.form
        onSubmit={submitForm}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
      >
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
      </motion.form>
    </>
  );
}
