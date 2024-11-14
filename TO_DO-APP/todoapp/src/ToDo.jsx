import { useState } from "react";

const ToDo = () => {
  const [count, setCount] = useState(0);
  const maxCount = 10;
  const lowCount = 0;

  const Increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    } else {
      console.log("count has reached max limit");
    }
  };

  const Decrement = () => {
    if (count > lowCount) {
      setCount(count - 1);
    } else {
      console.log("count has reached low limit");
    }
  };

  return (
    <div>
      <h1>
        {count} / {maxCount}
      </h1>
      <button onClick={Increment} disabled={count === maxCount}>
        +
      </button>
      <button onClick={Decrement} disabled={count === lowCount}>
        -
      </button>
      {count === maxCount && <p>You have reached yor max limit</p>}
      {count === lowCount && <p>You have reached yor low limit</p>}
    </div>
  );
};

export default ToDo;
