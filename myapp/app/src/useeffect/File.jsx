import { useState, useEffect } from "react";

const File = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../countries.json"); // Relative to the public folder
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <h4>{item.age}</h4>
            <img
              src={item.photo}
              alt={item.name}
              style={{ height: "auto", width: "300px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default File;
