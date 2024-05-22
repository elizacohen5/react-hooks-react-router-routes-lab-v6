import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/actors`)
      .then((r) => r.json())
      .then((actors) => setActors(actors))
      .catch((error) => console.log(error));
  }, []);

  const actorArticle = (actors || []).map((actor) => {
    const actorMovieList = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>{actorMovieList}</ul>
      </article>
    );
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorArticle}
      </main>
    </>
  );
}

export default Actors;
