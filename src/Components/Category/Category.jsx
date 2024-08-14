import React from 'react';
import Widget from '../Widget/Widget';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../../Redux/action';

function Category({ category }) {
  const dispatch = useDispatch();

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(category.id, widgetId));
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => handleRemoveWidget(widget.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
