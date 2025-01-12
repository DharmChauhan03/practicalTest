import React from 'react';
import './AddCardForm.css';

function AddCardForm({ onClose }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Card added');
    onClose(); // Close the form after submission
  };

  return (
    <form className="add-card-form" onSubmit={handleFormSubmit}>
      <h2>Add New Card</h2>
      <div className="form-group">
        <label>Card Name</label>
        <input type="text" placeholder="Enter card name" required />
      </div>
      <div className="form-group">
        <label>Card Number</label>
        <input type="text" placeholder="Enter card number" required />
      </div>
      <div className="form-group">
        <label>Expiration Date</label>
        <input type="date" required />
      </div>
      <div className="form-group">
        <label>CVV</label>
        <input type="text" placeholder="Enter CVV" required />
      </div>
      <button type="submit" className="submit-btn">
        Add Card
      </button>
    </form>
  );
}

export default AddCardForm;
