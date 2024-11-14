import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submit, setSubmit] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.prevDefault();
    setSubmit(formData);
    console.log(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <div>
      <h1>User information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submit && (
        <div>
          {console.log(submit)}
          <h2>My data</h2>
          <p>Name: {submit.name}</p>
          <p>Email: {submit.email}</p>
        </div>
      )}
    </div>
  );
};
export default Form;
