import React, { useContext, useState } from "react";
import { MainContext } from "../context/TransactionProvider";

const SearchBar = () => {
  const { searchItem, setSearchItem } = useContext(MainContext);
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };

  return (
    <div className="relative mb-5 md:mb-0">
      {/* <h2>Search Transaction:</h2> */}
      <form onSubmit={(e) => e.preventDefault()} className="">
        <input
          className="p-3 md:p-4 w-[99%] lg:w-[80%] px-5 md:px-7 shadow-lg rounded-full bg-slate-50 focus:outline focus:outline-1 focus:outline-slate-500"
          type="text"
          name="findTransaction"
          id="findTransaction"
          size={60}
          placeholder="Search by User's Name or Transaction Id..."
          value={searchItem}
          onChange={handleSearch}
          required
        />
        <span
        className="absolute top-3 left-[85%] lg:top-4"
        > Q </span>
      </form>
    </div>
  );
};

export default SearchBar;
