import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/directors`)
      .then((r) => r.json())
      .then((directors) => setDirectors(directors))
      .catch((error) => console.log(error));
  }, []);

  const directorArticle = (directors || []).map((director) => {
    const directorMovieList = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {directorMovieList}
        </ul>
      </article>
    );
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorArticle}
      </main>
    </>
  );
}

export default Directors;
