// import React from "react";
// import "./ButtonContainer.css";
// import LockIcon from "@mui/icons-material/Lock";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import DoneIcon from "@mui/icons-material/Done";
// import GoogleIcon from "@mui/icons-material/Google";
// import gpayLogo from '../../assets/gpay.png'

// function ButtonContainer() {

  


//   return (
//     <div className="button-container">
//       <div className="action-btn">
//       <div className="icon-container active">
//         <LockIcon className="icon" />
//         </div>
//         <span>Lock Card</span>
//       </div>

//       <div className="action-btn">
//       <div className="icon-container">
//         <ArchiveIcon className="icon" />
//         </div>
//         <span>Archive</span>
//       </div>

//       <div className="action-btn">
//       <div className="icon-container">
//         <DoneIcon className="icon" />
//         </div>
//         <span>use as default</span>
//       </div>

//       <div className="action-btn">
//       <div className="icon-container">
//         <img src={gpayLogo} alt="" height="40px" width="40"px className="gpay-icon"/>
//         </div>
//         <span>add to Gpay</span>
//       </div>
//     </div>
//   );
// }

// export default ButtonContainer;


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
