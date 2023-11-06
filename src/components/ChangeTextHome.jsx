import { useRef } from "react";

const ChangeTextHome = () => {
  const addRef = useRef("");

  const addText = () => {
    addRef.current.innerText = "Welcome to Home Page.Thanks for trying me.Good Luck";
  };

  return (
    <div style={{ padding: "50px 20px" }}>
        <h2>Click the button to See a message.</h2>
      <h1 ref={addRef}></h1>
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "blueviolet",
          border: "none",
          color: "white",
          fontSize:"18px"
        }}
        onClick={addText}
      >
        Add Text
      </button>
    </div>
  );
};

export default ChangeTextHome;
