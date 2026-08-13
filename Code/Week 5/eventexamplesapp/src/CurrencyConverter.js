import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = () => {
    // Conversion rate: 1 Euro = ~90 INR (example)
    const rate = 90;
    setResult((rupees / rate).toFixed(2));
  };

  return (
    <div>
      <h3>Currency Converter (INR to EUR)</h3>
      <input 
        type="number" 
        onChange={(e) => setRupees(e.target.value)} 
        placeholder="Enter Rupees" 
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Result: {result} EUR</p>
    </div>
  );
}
export default CurrencyConverter;