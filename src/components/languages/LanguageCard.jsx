export const LanguageCard = ({ handleLanguageDelete, lang }) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <button
      className="language-delete-btn"
      key={lang.id}
      onClick={() => handleLanguageDelete(lang.id)}
    >
      {capitalize(lang.language)}
    </button>
  );
};
