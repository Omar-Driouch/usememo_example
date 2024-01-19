import React, { useState, useMemo } from "react";

 
const MemoizedComponent = React.memo(({ number }) => {
  console.log("MemoizedComponent rendering...");
  return <p>{number}</p>;
});

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const [render, setRender] = useState(0);

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
          console.log("Only the app Component getting rendering ")
        }}
      >
        Change Theme
      </button>
      <button
        onClick={() => {
          setRender(render + 1);
        }}
      >
        Load comonent
      </button>
      {/* Wrap the MemoizedComponent with React.memo */}
      <MemoizedComponent number={render} />

      <p style={themeStyle}>{number}</p>
    </>
  );
};

export default App;
