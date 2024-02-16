import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [animeTitle, setAnimeTitle] = useState("");

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/random/anime").then((response) => {
      setAnimeTitle(response.data);
    });
  }, []);

  if (!animeTitle) return null;

  return (
    <>
      <h1>{animeTitle.data.title}</h1>
    </>
  );
}

export default App;
