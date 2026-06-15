import { FaEdit } from "react-icons/fa";

export const IconButton = ({ onClick, label }) => {
  return (
    <button className="edit-btn" onClick={onClick}>
      <FaEdit />
      {label}
    </button>
  );
};
