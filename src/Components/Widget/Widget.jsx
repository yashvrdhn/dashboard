import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../../Redux/action';
import "./widget.css";

function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className="widget">
      <span className="widget-name">{widget.name}</span>
      <span className="widget-text">{widget.text}</span>
      <button className="remove-widget" onClick={handleRemoveWidget}>X</button>
    </div>
  );
}

export default Widget;
