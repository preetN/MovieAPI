import React from "react";

function Card({ movie, handleOnRemove, handleOnAdd }) {
  return (
    <>
      <div className="card w-25 m-4 ">
        <img src={movie.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">
            <b>Rating:</b> {movie.imdbRating}{" "}
          </p>
          <p className="card-text">
            <b>Awards:</b> {movie.Awards}
          </p>
          {movie.type && (
            <p className="card-text">
              <b>Type:</b> {movie.type}
            </p>
          )}
          {handleOnAdd && (
            <div className="d-flex justify-content-between mb-1">
              <button
                className="btn btn-success"
                onClick={() => handleOnAdd(movie, "awesome")}
              >
                Awesome
              </button>
              <button
                className="btn btn-warning text-light "
                onClick={() => handleOnAdd(movie, "boring")}
              >
                Boring
              </button>
            </div>
          )}
          {handleOnRemove && (
            <div className="d-grid">
              <button
                className="btn btn-danger text-light "
                onClick={handleOnRemove}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
