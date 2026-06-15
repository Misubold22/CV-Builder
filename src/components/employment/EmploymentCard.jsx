import { IconButton } from "../common/IconButton.jsx";

export function EmploymentCard() {
  return (
    <>
      <div className="card">
        <div className="card-details">
          <h3 className="text-title">Junior Web Developer at Startup Inc.</h3>
          <p className="text-body">Jun/2020 - July/2021</p>
        </div>
        <div className="button-container">
          <IconButton />
        </div>
      </div>
    </>
  );
}
