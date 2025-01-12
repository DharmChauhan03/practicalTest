// import React,{ useState } from "react";
// import "./CardSection.css";
// import Card from "../Card/Card";
// import ButtonContainer from "../ButtonContainer/ButtonContainer";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import Slider from "react-slick";

// function CardSection() {
 
//   const [selectedButton, setSelectedButton] = useState("Lock");

  

//   return (
//     <div className="card-section">
//       <div className="card-top-section">
//         <div className="show-card-btn">
//           <VisibilityOutlinedIcon className="show-icon" />
//           <span>Show card number</span>
//         </div>
//       </div>
//       <div className="card-middle-section">
//         <Card />
        
//         <ButtonContainer />
//       </div>
//       <div className="card-bottom-section">
      
     
//       </div>
//     </div>
//   );
// }

// export default CardSection;



import React, { useState } from "react";
import "./CardSection.css";
import Card from "../Card/Card";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function CardSection() {
  const [selectedButton, setSelectedButton] = useState("Lock");
  const [showCardNumber, setShowCardNumber] = useState(false);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const toggleCardNumberVisibility = () => {
    setShowCardNumber((prev) => !prev);
  };

  return (
    <div className="card-section">
      {/* Top Section */}
      <div className="card-top-section">
        <div className="show-card-btn" onClick={toggleCardNumberVisibility}>
          <VisibilityOutlinedIcon className="show-icon" />
          <span>{showCardNumber ? "Hide card number" : "Show card number"}</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="card-middle-section">
        <Card
          cardHolder="Dharm Chauhan"
          cardNumber={showCardNumber ? "1234567812345678" : "123456781234****"}
          selectedButton={selectedButton}
        />
        <ButtonContainer onButtonClick={handleButtonClick} />
      </div>

      {/* Bottom Section */}
      <div className="card-bottom-section">
        {/* Future functionality like carousel can go here */}
      </div>
    </div>
  );
}

export default CardSection;
