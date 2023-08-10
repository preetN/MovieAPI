import React, { useState } from "react";

function Searchbar() {
  const [form, setForm] = useState("");

  const handleOnChange = (e) => {
    setForm(e.target.value);
    console.log(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log("ARE YOU SEARCHING FOR: " + form);
  };
  return (
    <>
      <form>
        <div className=" container d-flex mt-5 p-2 bg-black bg-opacity-25 rounded">
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
        </div>
      </form>
    </>
  );
}

export default Searchbar;
