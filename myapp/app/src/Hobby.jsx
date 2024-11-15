import { useState } from "react";
import { Activities } from "./Users";

const Hobby = () => {
  const [hobbies, setHobbies] = useState(Activities);
  const [search, setSearch] = useState("");
  const [newHobbies, setNewHobbies] = useState({ id: "", title: "" });

  const removeActivities = (id) => {
    setHobbies(hobbies.filter((hobbie) => hobbie.id !== id));
  };

  const searchActivities = hobbies.filter((hobbie) =>
    hobbie.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchActivities);

  const addActivities = () => {
    if (newHobbies.title.trim() === "" || newHobbies.id.trim() === "") {
      alert("Please fill in the file");
    }
    const newActivitieData = {
      title: newHobbies.title,
      id: parseInt(newHobbies.id),
    };
    setHobbies([...hobbies, newActivitieData]);
    setNewHobbies({ title: "", id: "" });
  };

  return (
    <div className="container">
      <h1>MY Fun List</h1>
      <>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          value={search}
        />
        <ul className="student-list">
          {hobbies.map((hobbie) => (
            <li key={hobbie.id} className="student-item">
              <p>{hobbie.title}</p>
              <button
                className="remove"
                onClick={() => removeActivities(hobbie.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button className="clear-all" onClick={() => setHobbies([])}>
          Clear
        </button>
      </>
      <div style={{ marginTop: "20px" }}>
        <h2>Add New Hobbies</h2>
        <input
          type="text"
          placeholder="Name"
          value={newHobbies.title}
          onChange={(e) =>
            setNewHobbies({ ...newHobbies, title: e.target.value })
          }
          style={{
            width: "calc(50% - 10px)",
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          placeholder="Age"
          value={newHobbies.id}
          onChange={(e) => setNewHobbies({ ...newHobbies, id: e.target.value })}
          style={{
            width: "calc(50% - 10px)",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addActivities}
          style={{
            marginTop: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default Hobby;
