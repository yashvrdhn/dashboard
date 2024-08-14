import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../../Redux/action';
import "./addwidget.css";

function AddWidget() {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (selectedCategory && widgetName && widgetText) {
      dispatch(addWidget(selectedCategory, widgetName, widgetText));
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWidgetName(''); 
    setWidgetText('');
    setSelectedCategory(''); 
  };

  return (
    <div>
      <button onClick={openModal}>Add Widget</button>
      
      {isModalOpen && (
        <div className="add-widget-modal">
          <div className="add-widget-modal-content">
            <h3>Add New Widget</h3>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            <input 
              type="text" 
              placeholder="Widget Name" 
              value={widgetName}
              onChange={e => setWidgetName(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Widget Text" 
              value={widgetText}
              onChange={e => setWidgetText(e.target.value)}
            />
            <button onClick={handleAddWidget}>Add Widget</button>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWidget;
