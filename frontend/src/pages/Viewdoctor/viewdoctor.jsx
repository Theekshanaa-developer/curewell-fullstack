import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./viewdoctor.css";

function ViewDoctor() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 receive specialization code
  const code = location.state?.code;

  useEffect(() => {
    // 🔥 If code exists → fetch filtered doctors
    if (code) {
      axios
        .get(`http://localhost:8080/doctors/specialization/${code}`)
        .then((response) => {
          setDoctors(response.data);
        })
        .catch((error) => {
          console.error("Error fetching filtered doctors:", error);
        });
    } 
    // 🔥 Else → fetch all doctors
    else {
      axios
        .get("http://localhost:8080/doctors")
        .then((response) => {
          setDoctors(response.data);
        })
        .catch((error) => {
          console.error("Error fetching doctors:", error);
        });
    }
  }, [code]);

  return (
    <div className="view-container">
      <h2>View Doctor</h2>

      {/*Show selected specialization */}
      {code && <p>Specialized Doctors for: <b>{code}</b></p>}

      <table className="doctor-table">
        <thead>
          <tr>
            <th>Doctor Id</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doctors.length > 0 ? (
            doctors.map((doc) => (
              <tr key={doc.doctorId}>
                <td>{doc.doctorId}</td>
                <td>{doc.name}</td>
                <td>{doc.specializationCode}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate("/update-doctor", { state: doc })
                    }
                  >
                    Edit Doctor Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No doctors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDoctor;