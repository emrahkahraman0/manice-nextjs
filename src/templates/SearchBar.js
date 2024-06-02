"use client";
import React, { useState, useEffect, useRef } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Boş bir yere tıklandığında arama çubuğunu kapatmak için bir event listener ekleyelim
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputVisible(false);
      }
    };

    // Event listener'ı ekleyelim
    document.addEventListener("mousedown", handleClickOutside);

    // Component kaldırıldığında event listener'ı temizleyelim
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleToggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <>
      <div className="header_search" ref={inputRef}>
        <div className="container">
          <button className="header_search_open" onClick={handleToggleInput}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          {isInputVisible && (
            <div className="header_search_input">
              <button
                className="header_search_input_close"
                onClick={handleToggleInput}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <input
                type="text"
                placeholder="Ara..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ display: isInputVisible ? "block" : "none" }}
              />
              <button className="submit" onClick={handleSearch}>
                Ara
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
