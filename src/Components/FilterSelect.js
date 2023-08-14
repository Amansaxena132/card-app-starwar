// components/FilterSelect.js

import { Select } from "antd";

const { Option } = Select;

const FilterSelect = ({ filter, handleFilterChange }) => {
  return (
    <Select
      placeholder="Filter by species"
      value={filter}
      onChange={handleFilterChange}
      style={{ marginBottom: "20px", width: "200px" }}
    >
      <Option value="">All</Option>
      <Option value="Human">Human</Option>
      <Option value="Droid">Droid</Option>
      <Option value="Wookiee">Wookiee</Option>
    </Select>
  );
};

export default FilterSelect;
