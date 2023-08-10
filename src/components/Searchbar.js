import React, { useState } from "react";
import axios from "axios";
import Like from "./Like";
import Card from "./Card";
function Searchbar() {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [awesome, setAwesome] = useState([]);
  const [boring, setBoring] = useState([]);
  const [isError, setIsError] = useState(false);
  const url = "https://www.omdbapi.com/?apikey=53df77d2&t=";

  const handleOnChange = (e) => {
    setForm(e.target.value);
    setIsError(false);
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(url + form); // API call usimg axios
      if (response.data.imdbID) {
        setMovie(response.data);
      } else {
        setIsError(true);
        setMovie({});
      }
    } catch (e) {
      setIsError(true);
      setMovie({});
    }
  };
  const handleOnRemove = () => {
    setMovie({});
  };
  const handleOnAwesome = () => {
    setAwesome((arr) => [...arr, movie]);
  };
  const handleOnBoring = () => {
    setBoring((arr) => [...arr, movie]);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center container mt-5 p-2 bg-black bg-opacity-25 rounded">
        <form className="d-flex w-100">
          <input
            value={form}
            className="form-control w-75 "
            type="text"
            placeholder="Movie name here"
            onChange={handleOnChange}
          />
          <button
            onClick={handleOnClick}
            className="
      btn btn-warning w-25 ms-2"
          >
            Search
          </button>
        </form>
        {movie.imdbID && (
          <Card
            movie={movie}
            handleOnRemove={handleOnRemove}
            handleOnAwesome={handleOnAwesome}
            handleOnBoring={handleOnBoring}
          />
        )}
        {isError && (
          <div className="alert alert-warning mt-3" role="alert">
            No movies found
          </div>
        )}
      </div>
      <Like boring={boring} />
    </>
  );
}

export default Searchbar;
