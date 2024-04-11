import React, { useState } from 'react';
import './TipForm.css';

export default function TipForm({}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <tip-form>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label htmlFor="percent">Percentage:</label>
          <div className="error">
            <span><input type="text"/>%</span>
            <span className="message">Not a number</span>
          </div>
          <span className="spacer"></span>
          <label htmlFor="amount">Amount:</label>
          <input type="text"/>
          <span className="spacer"></span>
        </div>
        <input type="submit" value="Calculate"/>
      </form>
    </tip-form>
  );
}