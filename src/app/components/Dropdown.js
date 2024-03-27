import React, { useEffect, useState } from 'react';

const Dropdown = ({ title, options, selectedOptions, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionChange = (option) => {
      onChange(option); // Notify parent component about the change
    };
  
    return (
      <div className="relative">
        <button onClick={toggleDropdown} className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>{title}</span>
          <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d={!isOpen ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" : "M14.707 12.707a1 1 0 01-1.414 0L10 9.414 6.707 12.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"} />
          </svg>
        </button>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option) => (
                <div key={option} className="px-4 py-2 flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                  />
                  <span className="ml-3">{option}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

export default Dropdown;