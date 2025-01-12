import React, { useState } from "react";
import "./ButtonContainer.css";
import LockIcon from "@mui/icons-material/Lock";
import ArchiveIcon from "@mui/icons-material/Archive";
import DoneIcon from "@mui/icons-material/Done";
import gpayLogo from "../../assets/gpay.png";

function ButtonContainer({ onButtonClick }) {
  const [selectedButton, setSelectedButton] = useState();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    onButtonClick(buttonName);
  };

  return (
    <div className="button-container">
      <div
        className={`action-btn ${selectedButton === "Lock" ? "active" : ""}`}
        onClick={() => handleButtonClick("Lock")}
      >
        <div className="icon-container">
          <LockIcon className="icon" />
        </div>
        <span>Lock Card</span>
      </div>

      <div
        className={`action-btn ${selectedButton === "Archive" ? "active" : ""}`}
        onClick={() => handleButtonClick("Archive")}
      >
        <div className="icon-container">
          <ArchiveIcon className="icon" />
        </div>
        <span>Archive</span>
      </div>

      <div
        className={`action-btn ${selectedButton === "Default" ? "active" : ""}`}
        onClick={() => handleButtonClick("Default")}
      >
        <div className="icon-container">
          <DoneIcon className="icon" />
        </div>
        <span>Use as Default</span>
      </div>

      <div
        className={`action-btn ${selectedButton === "GPay" ? "active" : ""}`}
        onClick={() => handleButtonClick("GPay")}
      >
        <div className="icon-container">
          <img src={gpayLogo} alt="GPay" className="gpay-icon" />
        </div>
        <span>Add to GPay</span>
      </div>
    </div>
  );
}

export default ButtonContainer;
