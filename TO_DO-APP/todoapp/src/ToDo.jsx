import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = { id: Date.now(), text: inputValue, completed: false };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };
  return (
    <div>
      <label htmlFor="name">Task</label>
      <input
        type="text"
        id="task"
        value={inputValue}
        onChange={handleChange}
        size={40}
      />
      <input type="button" value="Add Task" onClick={addTask} />

      <ol>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default ToDo;
