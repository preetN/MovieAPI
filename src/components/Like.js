import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Tab, Tabs } from "react-bootstrap";

function Like({ movieList }) {
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (filterBy) => {
    console.log("Filter by :" + filterBy);
  };
  const removeMovieList = (movie) => {
    const newArr = movieList.filter((m) => m.imdbID !== movie.imdbID);
    setDisplayList(newArr);
  };
  return (
    <>
      <div className="container mt-3 p-2 bg-black bg-opacity-25  rounded">
        <div className="btn-group" role="group" aria-label="display list">
          <button type="button" className="btn btn-info">
            All
          </button>
          <button type="button" className="btn btn-warning">
            Awesome
          </button>
          <button type="button" className="btn btn-danger">
            Boring
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {displayList.length > 0 &&
            displayList.map((item) => (
              <Card
                key={item.imdbID}
                movie={item}
                handleOnRemove={removeMovieList}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Like;
