import React, { useState, useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Wrap the slow function inside useMemo
  const slowFunction = useMemo(() => {
    return (num) => {
      console.log("Slow function started");
      const startTime = Date.now();
      while (Date.now() - startTime < 200) {
        // Simulate a slow function
      }
      console.log("Slow function completed");
      return num * 2;
    };
  }, []); // Dependency array is empty as the slow function doesn't depend on any other state or props

  // Call the slowFunction inside the component
  const double = slowFunction(number);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Change Theme
      </button>
      <p style={themeStyle}>{double}</p>
    </>
  );
};

export default App;
