const FilterBar = () => {
  return (
    <div className="filter-bar">
      <select>
        <option>All Sizes</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <select>
        <option>All Colors</option>
        <option>Red</option>
        <option>Blue</option>
        <option>Black</option>
      </select>
      <select>
        <option>Sort by Price</option>
        <option>Low to High</option>
        <option>High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;