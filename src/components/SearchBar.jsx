import React, { useContext, useState } from "react";
import { MainContext } from "../context/TransactionProvider";

const SearchBar = () => {
  const {searchItem, setSearchItem} = useContext(MainContext)
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };
  
  return (
    <div>
      <h2>Search Transaction:</h2>
      <form onSubmit={(e)=>e.preventDefault()}>
      <input
        className="border border-slate-600 px-2 py-1"
        type="text"
        name="findTransaction"
        id="findTransaction"
        value={searchItem}
        onChange={handleSearch}
        required
      />
      <button 
      type="submit"
       className="border border-slate-600 px-2 py-1">
        Search
      </button>
      </form>
    </div>
  );
};

export default SearchBar;
