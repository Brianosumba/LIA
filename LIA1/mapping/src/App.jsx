import "./App.css";
import movies from "./Users";

const App = () => {
  return (
    <div>
      <h1>Top 6 Marvel Movies</h1>
      <ol className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h3>{movie.producer}</h3>
            <p>{movie.genre}</p>
            <p>{movie.yearPublished}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
