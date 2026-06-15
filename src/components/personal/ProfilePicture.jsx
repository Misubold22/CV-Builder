export function ProfilePicture({ setProfilePreview }) {
  function handleimg(e) {
    const selectedFile = e.target.files[0];
    setProfilePreview(URL.createObjectURL(selectedFile));
  }

  return (
    <>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="profilePicture">Profile picture:</label>
          <label htmlFor="profilePicture" className="file">
            Choose file
          </label>
          <input type="file" id="profilePicture" onChange={handleimg} />
        </div>
      </div>
    </>
  );
}
