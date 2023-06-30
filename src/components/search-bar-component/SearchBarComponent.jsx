import React, { useState } from "react";
import "./Search-bar.css";
import "../../css/Fonts.css";
import searchIcon from "../../assets/icons/search-bar.svg";

export function SearchBarComponent({ onEnterPress }) {
  const [inputValue, setInputvalue] = useState("");

  const handleInputChange = (event) => {
    setInputvalue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnterPress(inputValue);
      setInputvalue("");
    }
  };

  return (
    <div className="search-bar-wrapper">
      <input
        placeholder="Busca tu pokemon aqui"
        className="input-search"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <img src={searchIcon} className="icon-search" />
    </div>
  );
}

export default SearchBarComponent;
