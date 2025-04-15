import { useState, useEffect } from "react";
import "./Register.css";

const jobRoles = [
  "Software Developer/Engineer", "Director/Development Manager", "IT/DevOps Lead",
  "Architect", "DBA", "Product Manager", "Consultant/Systems Integrator",
  "IT Executive (CIO, VP Engineering, etc)", "Business Executive (CEO, COO, CTO, etc.)",
  "Data Scientist", "Student", "Other", "Operations Manager"
];

const RegistrationModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    jobRole: "",
    agree: false,
  });

  const [countries, setCountries] = useState([]);
  const [isVisible, setIsVisible] = useState(true); // 🆕 State to toggle modal visibility

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        const sortedCountries = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // 🧼 Hide the component entirely

  return (
    <div className="modal-container">
      <div className="modal-box">
        <button className="close-btn" onClick={handleClose} style={{ color: "blue" }}>
          &times;
        </button>
        <h2 className="modal-title">
          Monster <span>S</span><span>C</span><span>ALE</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container" style={{ padding: "30px" }}>
            <input type="text" name="firstName" placeholder="First Name *" required className="input-field" onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name *" required className="input-field" onChange={handleChange} />
            <input type="email" name="email" placeholder="Company Email *" required className="input-field" onChange={handleChange} />
            <input type="text" name="company" placeholder="Company *" required className="input-field" onChange={handleChange} />
            <select name="country" required className="select-field" onChange={handleChange} style={{ width: "300px" }}>
              <option value="">Country *</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <select name="jobRole" required className="select-field" onChange={handleChange} style={{ width: "300px" }}>
              <option value="">Job Role *</option>
              {jobRoles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div className="code-of-conduct">
            <b style={{ color: "white", marginRight: "230px" }}>Code of Conduct</b>
          </div>
          <div className="code-of-conduct">
            <input type="checkbox" id="terms" name="agree" checked={formData.agree} onChange={handleChange} required style={{ marginLeft: "30px" }} />
            <label htmlFor="terms">
              By registering, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Code of Conduct</a>.
            </label>
          </div>
          <button type="submit" className="register-button">
            <p style={{ margin: "6px" }}>REGISTER</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
