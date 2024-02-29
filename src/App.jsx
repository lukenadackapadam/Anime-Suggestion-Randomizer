import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "flowbite-react";

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
      <Card className="m-auto my-auto font-mono" horizontal>
        <img id="anime_img" src={content.data.images.jpg.image_url} alt="" />
        <h1 className="self-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {content.data.title}
        </h1>
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
        <Button color="blue" pill>
          <a href={content.data.url} target="_blank" rel="noopener noreferrer">
            Click for more info!
          </a>
        </Button>
        <Button color="success" pill onClick={refreshPage}>
          Click for a new anime!
        </Button>
      </Card>
    </>
  );
}

export default App;
