import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. Element Variables: Store UI components based on state
  let content;

  if (isLoggedIn) {
    content = (
      <div>
        <h2>User Dashboard</h2>
        <p>Welcome! You can book tickets now.</p>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <h2>Guest Page</h2>
        <p>Flight Details: XYZ Airlines - 10:00 AM</p>
        <button onClick={() => setIsLoggedIn(true)}>Login to Book</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      <hr />
      {/* Rendering the element variable */}
      {content}
    </div>
  );
}

export default App;