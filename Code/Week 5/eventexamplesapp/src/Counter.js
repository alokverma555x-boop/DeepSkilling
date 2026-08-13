import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const sayHello = () => alert("Hello! Static message.");
  const sayWelcome = (msg) => alert(`Message: ${msg}`);
  
  // Synthetic event example
  const handlePress = (e) => {
    console.log(e); // 'e' is the SyntheticEvent
    alert("I was clicked");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* 1. Multiple methods on one click */}
      <button onClick={() => { increment(); sayHello(); }}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
      {/* 2. Passing arguments */}
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      
      {/* 3. Synthetic Event */}
      <button onClick={handlePress}>OnPress</button>
    </div>
  );
}
export default Counter;