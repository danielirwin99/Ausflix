import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "../styles/SearchBar.css";

const SearchBar = ({ searchId, setSearchId, onSearch }) => {
  return (
    <div className="search__container">
      <input
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        className="search__input"
        type="text"
        placeholder="Type any keyword in here..."
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button onClick={() => onSearch()} className="search__btn">
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default SearchBar;
