import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies List</h1>
        {movies &&
          movies.map((movie) => <div key={movie.id}>{movie.title}</div>)}
      </header>
    </div>
  );
}

export default App;
