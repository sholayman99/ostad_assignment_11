import { useState, useRef } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  // Store the current count value in the ref
  prevCountRef.current = count;

  return (
    <div style={{margin:"20px"}}>
      <h2>Play Count Game__</h2>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button style={{
          backgroundColor: "rgb(9, 161, 166)",
          border: "none",
          padding: "4px 13px",
          fontSize: "16px",
          borderRadius:"3px",
          color:"white"
        }} onClick={incrementCount}>Increment</button>
      <button style={{
          backgroundColor: "rgb(0,0,0)",
          border: "none",
          padding: "4px 13px",
          fontSize: "16px",
          borderRadius:"3px",
          color:"white",
          margin:"2px"
        }} onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Count;
