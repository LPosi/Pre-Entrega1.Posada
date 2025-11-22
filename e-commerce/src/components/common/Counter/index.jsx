import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const sumar = () => {
    setNum(num + 1);
  };

  const restar = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <button style={{ backgroundColor: "gray" }} onClick={restar}>
        -
      </button>
      <input type="text" value={num}></input>
      <button style={{ backgroundColor: "gray" }} onClick={sumar}>
        +
      </button>
    </div>
  );
};

export default Counter;
