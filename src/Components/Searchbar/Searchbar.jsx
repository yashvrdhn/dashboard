import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./searchbar.css";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useSelector(state => state.categories);

  const filteredWidgets = categories.reduce((acc, category) => {
    const filtered = category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc.push({ categoryName: category.name, widgets: filtered });
    }
    return acc;
  }, []);

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search Widgets..." 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      {searchQuery && (
        <ul className="widget-list">
          {filteredWidgets.map(({ categoryName, widgets }) => (
            <li key={categoryName}>
              <strong>{categoryName}</strong>
              <ul>
                {widgets.map(widget => (
                  <li key={widget.id}>
                    <span>{widget.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
