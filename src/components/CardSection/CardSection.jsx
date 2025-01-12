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
  const [selectedButton, setSelectedButton] = useState("Normal");
  const [showCardNumber, setShowCardNumber] = useState(false);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const toggleCardNumberVisibility = () => {
    setShowCardNumber((prev) => !prev); // Toggle visibility between true and false
    setSelectedButton((prev) => (prev === "Normal" ? "Normal" : "Normal")); // Toggle background color
  };

    const handleShowCardNumber = () => {
      setSelectedButton("Normal"); // Reset to Normal state
      setShowCardNumber(true); // Show the card number
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
          cardNumber={showCardNumber ? "1234  5678  1234  5678" : "**** **** **** 5678"}
          selectedButton={selectedButton}
          
        />
        <ButtonContainer  selectedButton={selectedButton} setSelectedButton={setSelectedButton}  onButtonClick={handleButtonClick} />
      </div>

      {/* Bottom Section */}
      <div className="card-bottom-section">
        {/* Future functionality like carousel can go here */}
      </div>
    </div>
  );
}

export default CardSection;
