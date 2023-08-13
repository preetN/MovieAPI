import { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Like from "./components/Like";
function App() {
  const [movieList, setMovieList] = useState([]);

  const handleOnAdd = (movie, choice) => {
    const newMovie = { ...movie, choice };
    console.log(newMovie.choice);
    const alreadyHAsMovie =
      movieList.filter((m) => m.imdbID === movie.imdbID).length > 0;
    if (alreadyHAsMovie) {
      return;
    }
    setMovieList([...movieList, newMovie]);
  };
  const handleOnRemove = (movie) => {
    const newArr = movieList.filter((m) => m.imdbID !== movie.imdbID);
    setMovieList(newArr);
  };
  return (
    <div className="bg-dark pt-3 min-vh-100">
      <Header />
      <Searchbar handleOnAdd={handleOnAdd} />
      <Like handleOnRemove={handleOnRemove} movieList={movieList} />
    </div>
  );
}

export default App;
