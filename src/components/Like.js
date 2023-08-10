import React from "react";
import Card from "./Card";
function Like({ boring }) {
  return (
    <>
      <div className="container mt-3 p-2 bg-black bg-opacity-25  rounded">
        <div
          className="btn-group"
          role="group"
          aria-label="like dislike section"
        >
          <button type="button" className="btn btn-danger">
            All
          </button>
          <button type="button" className="btn btn-warning">
            Awesome
          </button>
          <button type="button" className="btn btn-success">
            Boring
          </button>
        </div>
        <div className="text-warning mt-2 p-2">
          <p>0 match found</p>
        </div>
      </div>
      <div>
        {boring.length &&
          boring.map((item) => {
            <Card movie={item} />;
          })}
      </div>
    </>
  );
}

export default Like;
