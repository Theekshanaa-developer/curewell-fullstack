import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./viewspecial.css";


function ViewSpecial() {

   const [specializations, setSpecializations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/specializations")
      .then(response => {
        setSpecializations(response.data);
      })
      .catch(error => {
        console.error("Error fetching Specializations:", error);
      });
  }, []);




  return (
    <div className="view-container">
      <h2>View Specialization</h2>

      <table className="special-table">
        <thead>
          <tr>
            <th>Specialization Code</th>
            <th>Specialization Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {specializations.map((sp) => (
            <tr key={sp.code}>
              <td>{sp.code}</td>
              <td>{sp.name}</td>
              <td>
               <button onClick={() => navigate("/doctors", { state: { code: sp.code } })}>
  View Doctors
</button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSpecial;


