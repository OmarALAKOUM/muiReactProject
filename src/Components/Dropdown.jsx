import React, { useState, useRef, useEffect } from "react";
import { FaSyncAlt, FaPlus } from "react-icons/fa";
import { MdArrowDropDown, MdArrowForward } from "react-icons/md";
import '../dropdown.css'
const Dropdown = ({ options = [], selected, onSelect, label = "Select Option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleRefresh = (e) => {
    e.stopPropagation();
    onSelect(null); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-field">
      <div className="dropdown-wrapper" ref={dropdownRef}>
        <label className={`dropdown-label ${isOpen || selected ? "focused" : ""}`}>
          {label} *
        </label>

        <div
          className={`dropdown-container ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          tabIndex="0"
        >
          <div className="dropdown-selected">
            {selected ? selected.description : ""}
          </div>
          <div className="dropdown-icons">
            <FaSyncAlt className="refresh-icon" onClick={handleRefresh} />
            <MdArrowDropDown className="arrow-icon" />
          </div>
        </div>

        {isOpen && (
          <div className="dropdown-list">
             <div className="create-new" >
              Create New Role
              <FaPlus className="list-icon" />
            </div>
            {options.map((option) => (
              <div
                key={option.id}
                className="dropdown-list-item"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option.description}
                <MdArrowForward className="list-icon" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default Dropdown;