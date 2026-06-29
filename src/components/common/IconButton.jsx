import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export const EditButton = ({ onClick, label }) => {
  return (
    <button className="edit-btn" onClick={onClick}>
      <MdEdit />
      {label}
    </button>
  );
};

export const DeleteButton = ({ onClick, label }) => {
  return (
    <button className="delete-btn" onClick={onClick}>
      <MdDelete />
      {label}
    </button>
  );
};

export const SkillDeleteButton = ({ onClick, label }) => {
  return (
    <button className="skill-delete-btn" onClick={onClick}>
      <MdDelete />
      {label}
    </button>
  );
};
