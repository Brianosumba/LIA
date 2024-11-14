import { useState } from "react";

const Counter = () => {
  const [name, setName] = useState("Miguel");
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState("fotboll");
  const [color, setColor] = useState("Blue");

  const showBrian = () => {
    setName("Brian");
    setAge(60);
    setHobby("Basketball");
    setColor("Green");
  };

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Hobby: {hobby}</h3>
      <h3>Color: {color}</h3>
      <button onClick={showBrian}>Show Brian</button>
    </div>
  );
};

export default Counter;
