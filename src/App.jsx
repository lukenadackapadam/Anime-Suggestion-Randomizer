import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/random/anime").then((response) => {
      setContent(response.data);
    });
  }, []);

  if (!content) return null;

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <img src={content.data.images.jpg.image_url} alt="" />
      <h1>{content.data.title}</h1>
      <p>
        Genre:{" "}
        {content.data.genres.map((genre) => (
          <div>{genre.name}</div>
        ))}
      </p>
      <p>Type: {content.data.type}</p>
      <p>Rating: {content.data.rating}</p>
      <p>Airing Status: {content.data.aired.string}</p>
      <p>Episodes: {content.data.episodes}</p>
      <p>Synopsis: {content.data.synopsis}</p>
      <p>Score: {content.data.score}</p>
      <a href={content.data.url} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
      <button onClick={refreshPage}>Click for a new anime!</button>
    </>
  );
}

export default App;
