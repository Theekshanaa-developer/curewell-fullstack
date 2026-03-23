import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./viewsurgery.css";


function ViewSurgery() {

   const [surgeries, setSurgeries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/surgeries")
      .then(response => {
        setSurgeries(response.data);
      })
      .catch(error => {
        console.error("Error fetching Surgeries:", error);
      });
  }, []);



  return (
    <div className="view-container">
      <h2>View Today's Surgery</h2>

      <table className="surgery-table">
        <thead>
          <tr>
            <th>Surgery Id</th>
            <th>Doctor Id</th>
            <th>Surgery Date</th>
            <th>End Time</th>
            <th>Start Time</th>
            <th>Surgery Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {surgeries.map((sur) => (
            <tr key={sur.surgeryId}>
              <td>{sur.surgeryId}</td>
              <td>{sur.doctorId}</td>
              <td>{sur.surgeryDate}</td>
              <td>{sur.startTime}</td>
              <td>{sur.endTime}</td>
              <td>{sur.surgeryCategory}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() =>navigate("/update-surgery",{state:sur}) }>
                  Edit Surgery Time
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSurgery;