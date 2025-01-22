import React, { useEffect, useState } from "react";

const SearchBar = ({ profiles, setIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an Alumni");
  const [searchTerm, setSearchTerm] = useState("");
  const [max, setMax] = useState(3);

  const options = [];

  const getOptions = () => {
    let options = [];
    for (let i = 1; i <= max; i++) {
      console.log(profiles[i]);
      options.push(
        <button
          className="dropdown__btn"
          onClick={() => {
            setIndex(i);
          }}
        >
          <li className="dropdown-item">
            {profiles[i].name + " -- " + profiles[i].title}
          </li>
        </button>
      );
    }

    return options;
  };

  useEffect(() => {
    console.log(profiles);
  }, []);

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchTerm(""); // Clear search term after selection
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {selectedOption} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            className="dropdown-search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ul className="dd__list">{getOptions()}</ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
