// import React, { useState } from "react";
// import "./Card.css";
// import MasterCardIcon from "@mui/icons-material/CreditCard"; // Example for a generic icon
// import ChipIcon from "@mui/icons-material/SimCard";
// import mastercardLogo from "../../assets/mastercard-logo.png";
// import hdfcLogo from "../../assets/HDFC-logo.png";
// import LockIcon from "@mui/icons-material/Lock";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import DoneIcon from "@mui/icons-material/Done";


// function Card({ cardNumber, expiry, cardType }) {
//   const [cardHolder, setCardHolder] = useState("Dharm Chauhan");
//   const maskedCardNumber = cardNumber
//     ? `**** **** **** ${cardNumber.slice(-4)}`
//     : "**** **** **** ****";

//   return (
//     <div className="credit-card">
//       <div className="card-header">
//         <ArchiveIcon className="top-icon" />
//         <img src={hdfcLogo} alt="" height="16px" width="95px" />
//       </div>
//       <div className="card-body">
//         <div className="card-holder">
//           <h4>{cardHolder}</h4>
//         </div>

//         <div className="card-bottom">
//           <div className="card-bottom-left">
//             <h3 className="card-number">{maskedCardNumber}</h3>

//             <div className="card-footer">
//               <div className="footer-left"><b> Valid Till:</b> &ensp; 12/24</div>
//               <div className="footer-right"><b> CVV:</b>&ensp; ***</div>
//             </div>
            
//           </div>
//           <div className="card-bottom-right"><img src={mastercardLogo} alt="" height="40px" width="70px"/></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;


import React from "react";
import "./Card.css";
import mastercardLogo from "../../assets/mastercard-logo.png";
import hdfcLogo from "../../assets/HDFC-logo.png";
import LockIcon from "@mui/icons-material/Lock";
import ArchiveIcon from "@mui/icons-material/Archive";
import DoneIcon from "@mui/icons-material/Done";
import gpayTopIcon from "../../assets/gpay-top.png";

function Card({ cardHolder, cardNumber, selectedButton }) {
  const cardStyles = {
    Normal: { backgroundColor: "#0d3f62", topIcon: ""},
    Lock: { backgroundColor: "#6a93a5", topIcon: <LockIcon className="top-icon" /> },
    Archive: { backgroundColor: "#6a93a5", topIcon: <ArchiveIcon className="top-icon" /> },
    Default: { backgroundColor: "#0fa1dc", topIcon: <DoneIcon className="top-icon" /> },
    GPay: { backgroundColor: "#4086f5", topIcon: <img src={gpayTopIcon} alt="GPay" className="top-icon gpay-top-icon" /> },
  };

  const { backgroundColor, topIcon } = cardStyles[selectedButton] || cardStyles.Normal;

  return (
    <div className="credit-card" style={{ backgroundColor }}>
      <div className="card-header">
        {topIcon}
        <img src={hdfcLogo} alt="HDFC Logo"  height="16px" width="95px" className={selectedButton === "Normal" ? "hdfc-logo-right" : "hdfc-logo-left"} />
      </div>
      <div className="card-body">
        <div className="card-holder">
          <h4>{cardHolder}</h4>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-left">
            <h5 className="card-number">{cardNumber}</h5>
            <div className="card-footer">
              <div className="footer-left">
                <b>Valid Till:</b>&ensp;12/24
              </div>
              <div className="footer-right">
                <b>CVV:</b>&ensp;***
              </div>
            </div>
          </div>
          <div className="card-bottom-right">
            <img src={mastercardLogo} alt="MasterCard" height="40px" width="70px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
