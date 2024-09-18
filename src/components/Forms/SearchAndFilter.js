import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch, onFilter, filterOptions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    onFilter(filter);
  };

  return (
    <div className="search-and-filter">
      <form onSubmit={handleSearch} className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <select
        className="form-select mt-2"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option value="">Select filter...</option>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;