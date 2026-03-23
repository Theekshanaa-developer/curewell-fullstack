import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adddoctor.css";
import axios from "axios";

function AddDoctor() {
  const [name, setName] = useState("");
  const [specializationCode, setSpecializationCode] = useState(""); // 🔥 NEW
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (name.trim() === "") {
      setMessage("Please enter a doctor name");
      return;
    }

    if (specializationCode.trim() === "") {
      setMessage("Please enter specialization code");
      return;
    }

    // send BOTH fields
    const newDoctor = {
      name: name,
      specializationCode: specializationCode,
    };

    axios
      .post("http://localhost:8080/doctors", newDoctor)
      .then(() => {
        setMessage("Doctor successfully added");
        setName("");
        setSpecializationCode("");

        setTimeout(() => navigate("/viewdoctor"), 1000);
      })
      .catch((err) => {
        console.error("Error adding doctor:", err);
        setMessage("Failed to add doctor. Please try again.");
      });
  };

  return (
    <div className="add-container">
      <div className="form-box">
        <h2>Add a New Doctor</h2>

        <form onSubmit={handleSubmit}>
          {/* Doctor Name */}
          <div className="form-group">
            <label>Doctor Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* 🔥 NEW FIELD */}
          <div className="form-group">
            <label>Specialization Code</label>
            <input
              type="text"
              value={specializationCode}
              onChange={(e) => setSpecializationCode(e.target.value)}
              
            />
          </div>

          <div className="button-group">
            <button type="submit" className="add-btn">
              Add Doctor
            </button>
          </div>

          {/* Better cancel */}
          <p
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => navigate("/viewdoctor")}
          >
            Cancel
          </p>
        </form>

        {message && <p className="success-msg">{message}</p>}
      </div>
    </div>
  );
}

export default AddDoctor;