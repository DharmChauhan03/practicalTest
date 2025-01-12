import React, { useState } from "react";
import "./AddCardForm.css";
import CloseIcon from '@mui/icons-material/Close';

function AddCardForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    bankName: "",
    cardType: "",

    cardNumber: "",
    validTill: "",
    cvv: "",
    setDefault: false,
    addToGPay: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    } else if (formData.name.length > 35) {
      errors.name = "Name must be less than 35 characters";
    }

    if (!formData.bankName) {
      errors.bankName = "Bank Name is required";
    }

    if (!formData.cardType) {
      errors.cardType = "Card Type is required";
    }

    if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber)) {
      errors.cardNumber = "Card Number must be a valid 16-digit number";
    }

    if (!formData.validTill || new Date(formData.validTill) <= new Date()) {
      errors.validTill = "Valid Till must be a future date";
    }

    if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = "CVV must be a valid 3-digit number";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Card added:", formData);
      onClose(); // Close the form after submission
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Top Div */}
        <div className="modal-header">
          <h2>New Card</h2>
          <div className="modal-header-icon" onClick={onClose} ><CloseIcon className="close-icon" /> </div>
        </div>

        {/* Middle Div */}
        <div className="modal-body">
          <form className="add-card-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="i.e. James Carlon"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="full-input"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label>Bank Name:</label>
              <input
                type="text"
                name="bankName"
                placeholder="i.e. HDFC BANK"
                value={formData.bankName}
                onChange={handleInputChange}
                required
                className="full-input"
              />
              {errors.bankName && (
                <span className="error-message">{errors.bankName}</span>
              )}
            </div>

            <div className="form-group">
              <label>Card Type:</label>
              <select
                name="cardType"
                value={formData.cardType}
                onChange={handleInputChange}
                required
                className="full-input"
              >
                <option value="">Select Card Type</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
              {errors.cardType && (
                <span className="error-message">{errors.cardType}</span>
              )}
            </div>

            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="e.g. 7754 1542 6584 4875"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                className="full-input"
              />
              {errors.cardNumber && (
                <span className="error-message">{errors.cardNumber}</span>
              )}
            </div>

            <div className="modal-body-bottom">

            <div className="form-group">
              <label>Valid Till:</label>
              <input
                type="month"
                name="validTill"
                value={formData.validTill}
                onChange={handleInputChange}
                required
                className="input-exp"
              />
              {errors.validTill && (
                <span className="error-message">{errors.validTill}</span>
              )}
            </div>

            <div className="form-group">
              <label>CVV:</label>
              <input
                type="password"
                name="cvv"
                placeholder="***"
                value={formData.cvv}
                onChange={handleInputChange}
                required
                className="cvv"
              />
              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
            </div>

            </div>

            <div className="form-checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="setDefault"
                  checked={formData.setDefault}
                  onChange={handleInputChange}
                />
                Set this card as Default
              </label>
            </div>

            <div className="form-checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="addToGPay"
                  checked={formData.addToGPay}
                  onChange={handleInputChange}
                />
                Add this card to GPay
              </label>
            </div>
          </form>
        </div>

        {/* Bottom Div */}
        <div className="modal-footer">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="submit-button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCardForm;
