import React , { useState } from "react";
import "./style.css";

const jobRoles = [
  "Software Developer/Engineer", "Director/Development Manager", "IT/DevOps Lead",
  "Architect", "DBA", "Product Manager", "Consultant/Systems Integrator",
  "IT Executive (CIO, VP Engineering, etc)", "Business Executive (CEO, COO, CTO, etc.)",
  "Data Scientist", "Student", "Other", "Operations Manager"
];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "China", "Colombia",
  "Denmark", "Egypt", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "India",
  "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kenya", "Lebanon", "Malaysia",
  "Mexico", "Netherlands", "New Zealand", "Norway", "Pakistan", "Philippines", "Portugal", "Qatar",
  "Romania", "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden",
  "Switzerland", "Thailand", "Turkey", "United Kingdom", "United States", "Vietnam", "Zambia", "Zimbabwe"
];

const RegistrationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    jobRole: "",
    agree: false,
  });

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

  return (
    <div className="modal-container">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose} style={{color:"blue"}}>&times;</button>
        <h2 className="modal-title" >
          Monster <span>SCALE</span>
        </h2>
        <form onSubmit={handleSubmit} >
          <div className="form-container" style={{padding:"30px"}}>
  <input type="text" name="firstName" placeholder="First Name *" required className="input-field" onChange={handleChange} />
  <input type="text" name="lastName" placeholder="Last Name *" required className="input-field" onChange={handleChange} />
  <input type="email" name="email" placeholder="Company Email *" required className="input-field" onChange={handleChange} />
  <input type="text" name="company" placeholder="Company *" required className="input-field" onChange={handleChange} />
  <select name="country" required className="select-field" onChange={handleChange} style={{width:"312px"}} >
    <option value="">Country *</option>
    {countries.map((country) => (
      <option key={country} value={country}>{country}</option>
    ))}
  </select>
  <select name="jobRole" required className="select-field" onChange={handleChange} style={{width:"312px"}} >
    <option value="">Job Role *</option>
    {jobRoles.map((role) => (
      <option key={role} value={role}>{role}</option>
    ))}
  </select>
  </div>
  <div className="code-of-conduct"><b style={{color:"white",marginRight:"230px"}}>Code of Conduct</b></div>
  <div className="code-of-conduct">
    <input type="checkbox" id="terms" name="agree" checked={formData.agree} onChange={handleChange} required  style={{marginLeft:"30px"}}/>
    <label htmlFor="terms">
      By registering, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Code of Conduct</a>.
    </label>
  </div>
  
  <button type="submit" className="register-button"><p style={{margin:"6px"}}>REGISTER</p></button>
</form>

      </div>
    </div>
  );
};

export default RegistrationModal;
