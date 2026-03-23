import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./updatedoctor.css";

function UpdateDoctor() {
  const location = useLocation();
  const navigate = useNavigate();

  const doctor = location.state; 

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    if (doctor && doctor.name) {
      setName(doctor.name);
    }
  }, [doctor]);

  // If no doctor data, show message
  if (!doctor) {
    return (
      <div className="update-container">
        <h3>No doctor data available</h3>
        <button onClick={() => navigate("/doctors")}>
          Go Back
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!doctor?.doctorId) {
      setMessage("Invalid doctor data");
      return;
    }

    axios
      .put(`http://localhost:8080/doctors/${doctor.doctorId}`, {
        ...doctor,     
        name: name       
      })
      .then(() => {
        setMessage("Doctor updated successfully");
        setTimeout(() => navigate("/doctors"), 1000);
      })
      .catch((error) => {
        console.error("Update failed:", error);
        setMessage("Failed to update doctor. Try again.");
      });
  };

  return (
    <div className="update-container">
      <div className="form-box">
        <h2>Update Doctor</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Doctor ID:</label>
            <input type="text" value={doctor.doctorId} disabled />
          </div>

          <div className="form-group">
            <label>Doctor Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

      <div className="form-actions">
  <button type="submit" className="update-btn" disabled={!name}>
    Update
  </button>

  <Link to="/doctors" className="cancel-link">
    Cancel
  </Link>
</div>

          {message && <p className="success-msg">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default UpdateDoctor;