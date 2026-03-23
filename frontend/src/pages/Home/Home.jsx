import { useState } from "react";
import "./Home.css";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Care. Cure. Comfort</h1>
        <p>
          Empowering healthcare with skilled doctors, efficient hospital coordination, 
          and 24/7 support for uninterrupted patient care
        </p>

        <button 
          className="home-btn"
          onClick={() => setShowPopup(true)}
        >
          Get to Know
        </button>
      </div>

      <div className="home-right"></div>

      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>About Cure-Well</h2>
            <p>
              Cure-Well is a hospital management system designed to streamline 
              patient management, doctor coordination, and surgical scheduling 
              with real-time database integration.
            </p>

            <button 
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;