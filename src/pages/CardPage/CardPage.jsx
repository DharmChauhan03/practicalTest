import React,{ useState } from "react";
import "./CardPage.css";
import AddIcon from "@mui/icons-material/Add";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CardSection from "../../components/CardSection/CardSection";
import AddCardForm from "../../components/AddCardForm/AddCardForm";

function CardPage() {
  const [showAddCardForm, setShowAddCardForm] = useState(false);

  const handleAddCardClick = () => {
    setShowAddCardForm(true);
  };

  const handleCloseAddCardForm = () => {
    setShowAddCardForm(false);
  };

  return (
    <div className="card-page">
      <div className="card-page-container">
        <div className="container-header"> 
          <ul className="header-menu">
            <li className="menu-item active-item" > <u className="menu-underline"> Saved Cards </u> </li>
            <li className="menu-item">  GD Cards  </li>
          </ul>
          <div className="add-card-btn" onClick={handleAddCardClick}>
            <AddIcon className="add-icon" /> Add Card
          </div>
        </div>
        <div className="container-body">
          <div className="container-body-left">
            <div className="left-body-first">
              <div className="header-left">
                {" "}
                <GridViewOutlinedIcon /> Card Details{" "}
              </div>{" "}
              <KeyboardArrowDownOutlinedIcon className="down-rounded-icon" />{" "}
            </div>
            <div className="left-body-second">
              <div className="body-header">
                <div className="body-header-left">
                  <GridViewOutlinedIcon /> Today's Transactions
                </div>
                <KeyboardArrowDownOutlinedIcon className="down-rounded-icon" />
              </div>
              <div className="body-main">
                
              </div>
            </div>
          </div>
          <div className="container-body-right">
            <div className="body-right-top">
              <div className="body-right-top-header"> <u className="underline" > Credit Car</u>ds</div>
              <CardSection />
            </div>
            <div className="body-right-bottom">
              <div className="body-right-bottom-header"> <u className="underline" > Debit Car</u>ds</div>
              <CardSection />
            </div>
          </div>
        </div>
      </div>
      <div className="card-page-footer">
        <CopyrightIcon className="footer-icon" style={{ fontSize: "14px" }} />
        2022 GIRIRAJ GIGITAL Reserved All Rights.
      </div>

      {/* AddCardForm Popup */}
      {showAddCardForm && (
        <div className="popup-overlay" onClick={handleCloseAddCardForm}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={handleCloseAddCardForm}>
              &times;
            </button>
            <AddCardForm onClose={handleCloseAddCardForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardPage;
