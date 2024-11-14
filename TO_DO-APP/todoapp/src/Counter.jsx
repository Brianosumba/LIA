import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState([]);

  //Function to add new Counters
  const addCounter = () => {
    const newCounter = { id: Date.now(), value: 0 };
    setCounters([...counters, newCounter]);
  };

  // Function to increase and deacrese counters
  const increaseCounter = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return { ...counters, value: counter.value + 1 };
        } else {
          return counter;
        }
      })
    );
  };

  const decreaseCounter = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return { ...counters, value: counter.value - 1 };
        } else {
          return counter;
        }
      })
    );
  };

  //To sum the total value of Each Counter
  const total = counters.reduce(
    (accumulator, counter) => accumulator + counter.value,
    0
  );

  const removeCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div>
      <h1>{total}</h1>
      <button onClick={addCounter}>Add Counter</button>
      {counters.map((counter) => {
        <div key={counter.id}>
          <h2>{counter.id}</h2>
          <p>{counter.value}</p>
          <button onClick={increaseCounter(counter.id)}>Increase</button>
          <button onClick={decreaseCounter(counter.id)}>Decrease</button>
          <button onClick={removeCounter(counter.id)}>Remove</button>
        </div>;
      })}
    </div>
  );
};

export default Counter;
