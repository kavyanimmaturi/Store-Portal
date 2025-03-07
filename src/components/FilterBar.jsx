import React from "react";
import "./FilterBar.css";

function FilterBar({ filters, setFilters }) {
  return (
    <div className="filter-bar">
      <h1>Filter By</h1>
      <select className="select"
        value={filters.store}
        onChange={(e) => setFilters({ ...filters, store: e.target.value })}
      >
        <option value="All">All</option>
        <option value="Bajaj Store">Bajaj Store</option>
        <option value="Electronics">Electronics</option>
        <option value="D-Mart">D-Mart</option>
      </select>

      <input
       className="invoice-date"
        type="date"
        value={filters.date}
        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
      />
    </div>
  );
}

export default FilterBar;
