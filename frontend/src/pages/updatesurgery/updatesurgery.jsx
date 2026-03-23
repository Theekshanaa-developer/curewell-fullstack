import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./updatesurgery.css";

function UpdateSurgery() {
  const location = useLocation();
  const navigate = useNavigate();

  const surgery = location.state;

  
  const [doctorId, setDoctorId] = useState("");
  const [surgeryDate, setSurgeryDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (surgery) {
      setDoctorId(surgery.doctorId || "");
      setSurgeryDate(surgery.surgeryDate || "");
      setStartTime(surgery.startTime || "");
      setEndTime(surgery.endTime || "");
      setCategory(surgery.category || "");
    }
  }, [surgery]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedSurgery = {
      doctorId,
      surgeryDate,
      startTime,
      endTime,
      category,
    };

    axios
      .put(`http://localhost:8080/doctors/${surgery.surgeryId}`, updatedSurgery)
      .then(() => {
        setMessage("Surgery Details updated successfully");
        
        setTimeout(() => navigate("/surgeries"), 1000);
      })
      .catch((error) => {
        console.error("Update failed:", error);
        setMessage("Failed to update surgery details.");
      });
  };

  if (!surgery) return <h3>No surgery data available</h3>;

  return (
    <div className="update-container">
      <div className="form-box">
        <h2>Update Surgery</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Surgery ID:</label>
            <input type="text" value={surgery.surgeryId} disabled />
          </div>

          <div>
            <label>Doctor ID:</label>
            <input
              type="text"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Surgery Date:</label>
            <input
              type="text"
              value={surgeryDate}
              onChange={(e) => setSurgeryDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Start Time (24 Hours Format):</label>
            <input
              type="text"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label>End Time (24 Hours Format):</label>
            <input
              type="text"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Surgery Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="update-btn">
              Update
            </button>
            {message && <p className="success-msg">{message}</p>}
           
            <a href="#">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateSurgery;