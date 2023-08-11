import React from "react";

function Card({ movie, handleOnRemove, handleOnAwesome, handleOnBoring }) {
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

          <div className="d-flex justify-content-between mb-1">
            {handleOnAwesome && (
              <button className="btn btn-success" onClick={handleOnAwesome}>
                Awesome
              </button>
            )}
            {handleOnBoring && (
              <button
                className="btn btn-warning text-light "
                onClick={handleOnBoring}
              >
                Boring
              </button>
            )}
          </div>
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
