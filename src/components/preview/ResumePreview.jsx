export function ResumePreview(props) {
  return (
    <>
      <div className="personal-details">
        <p>{props.firstname}</p>
        <p>{props.lastname}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.address}</p>
        <p>{props.occupation}</p>
        <p>{props.linkedin}</p>
        <p>{props.portfolio}</p>
        <p>{props.about}</p>
        <p>{props.category}</p>
        <p>{props.skills}</p>
        <p>Languages:{props.languages}</p>
      </div>
      <div className="profile-picture">
        {" "}
        {props.file && (
          <img
            src={props.file}
            alt="profile preview"
            className="profile-preview"
          />
        )}
      </div>
    </>
  );
}
