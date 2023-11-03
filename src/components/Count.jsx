import { useEffect, useRef, useState } from "react";
import "../assets/css/Count.css"

const Count = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className="count-container">
      <h1>Play Count Game___</h1>
      <p>
        <input
          type="text"
          value={inputValue}
          placeholder="Write Something"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <h1>Render Count: {count.current}</h1>
    </div>
  );
};

export default Count;
