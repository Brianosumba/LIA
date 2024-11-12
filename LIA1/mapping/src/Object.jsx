import { useState } from "react";
import "./object.css";

const Object = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="content-container">
      <div>
        <h3>{count}</h3>
        <button className="counter-button" onClick={increase}>
          +
        </button>
        <button className="counter-button" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
};

export default Object;
