import { capitalizeFirstLetter } from "../../utils";

export function LanguagesList({ jobs }) {
  const listItems = jobs.map((l) => (
    <li key={l.id}>
      <p className="sidebar-paragraph">
        {" "}
        {capitalizeFirstLetter(l.language)}
      </p>{" "}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
