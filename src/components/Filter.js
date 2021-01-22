import React from 'react';

const Filter = ({ setFilter }) => {
  const selectHandler = e => {
    setFilter(e.target.value);
  };
  return (
    <div className="input-field col s10 offset-s1 m6 offset-m3">
      <select onChange={selectHandler} defaultValue="empty">
        <option value="empty" disabled>
          Filter
        </option>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Filter;
