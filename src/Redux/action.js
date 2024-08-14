export const addWidget = (categoryId, name, text) => ({
  type: 'ADD_WIDGET',
  payload: { categoryId, name, text }
});

export const removeWidget = (categoryId, widgetId) => ({
  type: 'REMOVE_WIDGET',
  payload: { categoryId, widgetId }
});
