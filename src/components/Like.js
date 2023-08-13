import React, { useEffect, useState } from "react";
import Card from "./Card";

function Like({ handleOnRemove, movieList }) {
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (filterBy) => {
    console.log("Filter by :" + filterBy);
    if (filterBy === "all") {
      setDisplayList(movieList);
    } else {
      const filterarr = movieList.filter((movie) => movie.choice === filterBy);
      setDisplayList(filterarr);
      console.log(filterarr);
    }
  };

  return (
    <>
      <div className="container mt-3 p-2 bg-black bg-opacity-25  rounded">
        <div className="btn-group" role="group" aria-label="display list">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => filterMovie("all")}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => filterMovie("awesome")}
          >
            Awesome
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => filterMovie("boring")}
          >
            Boring
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {displayList.length > 0 &&
            displayList.map((item) => (
              <Card
                key={item.imdbID}
                movie={item}
                handleOnRemove={() => handleOnRemove(item)}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Like;
