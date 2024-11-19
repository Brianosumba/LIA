import "./App.css";
import AxiosExample from "./Ax";

const App = () => {
  // const [students, setStudents] = useState(Users);

  // const removeStudent = (id) => {
  //   console.log(id);
  //   setStudents(students.filter((student) => student.id !== id));
  // };

  // const removeAll = () => {
  //   setStudents([]);
  // };
  return (
    <AxiosExample />
    //   <div className="container">
    //     <h1>Student List</h1>
    //     <>
    //       <ul className="student-list">
    //         {students.map((student) => (
    //           <li key={student.id} className="student-list">
    //             <p>
    //               {student.id} {student.name} {student.age}{" "}
    //             </p>
    //             <button
    //               className="remove"
    //               onClick={() => removeStudent(student.id)}
    //             >
    //               Remove
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //       <button className="clear-all" onClick={removeAll}>
    //         Clear
    //       </button>
    //     </>
    //   </div>
  );
};

export default App;
