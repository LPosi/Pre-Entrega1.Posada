import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button style={{ backgroundColor: "gray" }}>-</button>
      <input type="text" value={num}></input>
      <button style={{ backgroundColor: "gray" }}>+</button>
    </div>
  );
};

export default Counter;
