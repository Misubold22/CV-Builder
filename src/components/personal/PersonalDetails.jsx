function PersonalDetailsInputForm({
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  autoComplete = "true",
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </>
  );
}

export function PersonalDetails({ inputs, setInputs }) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstname">First name:</label>
          <PersonalDetailsInputForm
            type="text"
            id="firstname"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name:</label>
          <PersonalDetailsInputForm
            type="text"
            id="lastname"
            name="lastname"
            value={inputs.lastname}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <PersonalDetailsInputForm
            type="tel"
            id="phone"
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
            placeholder="(555) 555-5555"
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <PersonalDetailsInputForm
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="your@email.com"
            autoComplete="on"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="text">Address</label>
          <PersonalDetailsInputForm
            type="text"
            id="text"
            name="address"
            value={inputs.address}
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <PersonalDetailsInputForm
            type="text"
            id="occupation"
            name="occupation"
            value={inputs.occupation}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="linkedin">Linkedin</label>
          <PersonalDetailsInputForm
            type="text"
            id="linkedin"
            name="linkedin"
            value={inputs.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolio">Portfolio</label>
          <PersonalDetailsInputForm
            type="text"
            id="portfolio"
            name="portfolio"
            value={inputs.portfolio}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            value={inputs.about}
            onChange={handleChange}
            placeholder="I really enjoy coding!"
            rows={4}
          />
        </div>
      </div>
    </>
  );
}
