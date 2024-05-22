import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Movie() {

  const [movie, setMovie] = useState({});
  const params = useParams();
  const id = params.id

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
    .then(r => r.json())
    .then(movie => setMovie(movie))
    .catch(error => console.log(error));
  }, [id])

  const movieGenre = (movie.genres || []).map(genre => {
    return <span key={genre}>{genre}</span>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>{movieGenre}</div>
      </main>
    </>
  );
};

export default Movie;
