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
      <Card className="m-auto my-auto font-serif" horizontal>
        <img id="anime_img" src={content.data.images.jpg.image_url} alt="" />
        <h1 className="self-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {content.data.title}
        </h1>
        <p>
          <span className="font-bold">Genre:</span>{" "}
          {content.data.genres.map((genre) => (
            <div>{genre.name}</div>
          ))}
        </p>
        <p>
          <span className="font-bold">Type:</span> {content.data.type}
        </p>
        <p>
          <span className="font-bold">Rating:</span> {content.data.rating}
        </p>
        <p>
          <span className="font-bold">Airing Status:</span> {content.data.aired.string}
        </p>
        <p>
          <span className="font-bold">Episodes:</span> {content.data.episodes}
        </p>
        <p>
          <span className="font-bold">Synopsis:</span> {content.data.synopsis}
        </p>
        <p>
          <span className="font-bold">Score:</span> {content.data.score}
        </p>

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
