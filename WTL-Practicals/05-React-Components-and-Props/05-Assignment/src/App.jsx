// App.jsx
import React, { useState } from "react";
import Counter from "./components/Counter";
import Display from "./components/Display";

const App = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="container">
      <Counter 
      initial_value={0} 
      flag={flag} 
      name="First" 
      />
      
      <Counter 
      initial_value={10} 
      flag={flag} 
      name="Second" 
      />

      <Counter 
      initial_value={100} 
      flag={flag} 
      name="Third" 
      />

      <button
        onClick={() => {
          setFlag((prev) => !prev);
        }}
      >
        Reset All
      </button>
      <Display/>
    </div>
  );
};

export default App;
