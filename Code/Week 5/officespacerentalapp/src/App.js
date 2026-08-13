import React from 'react';

function App() {
  // Office data object/array
  const offices = [
    { id: 1, name: "Downtown Suite", rent: 55000, address: "123 Main St" },
    { id: 2, name: "Tech Park Hub", rent: 75000, address: "456 Silicon Ave" },
    { id: 3, name: "Co-work Space", rent: 40000, address: "789 Startup Rd" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* 1. Page Heading */}
      <h1>Office Space Rental</h1>

      {/* 2. Office Listing */}
      {offices.map((office) => (
        <div key={office.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          
          {/* 3. Attribute to display image */}
          <img 
            src="https://via.placeholder.com/150" 
            alt="Office" 
            style={{ width: '100px' }} 
          />
          
          <h3>{office.name}</h3>
          <p>Address: {office.address}</p>
          
          {/* 4. Conditional Styling for Rent */}
          <p>
            Rent: 
            <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
              ${office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;