import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setCount((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <p>{count > 0 ? `time left: ${count}` : "Time is Up"}</p>
    </div>
  );
};

export default Timer;
