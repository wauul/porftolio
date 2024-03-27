import React from "react";

const FilterTag = ({ label, onRemove }) => (
  <div className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {label}
    <button onClick={onRemove} className="ml-2">
      &times;
    </button>
  </div>
);
export default FilterTag;  