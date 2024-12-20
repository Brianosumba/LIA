const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Waaow, Maestro");
    props.addTask("say Wagone mi dawg!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;

// import { useState } from "react";

// const Form = () => {
//   // Step 1: Initialize state for form fields
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   // Step 2: Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Step 3: Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData); // Update the submitted data state
//     setFormData({ name: "", email: "" }); // Reset form fields
//   };

//   return (
//     <div>
//       <h1>User Information Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>

//       {/* Display submitted data */}
//       {submittedData && (
//         <div>
//           <h2>Submitted Data</h2>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;
