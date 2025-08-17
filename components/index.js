// Component loader - collects all components into global object

// Initialize global components object
window.COMPONENTS = window.COMPONENTS || {};

// Function to register a component
window.registerComponent = function(component) {
  window.COMPONENTS[component.id] = component;
  console.log('Registered component:', component.id);
};

// Function to get all components
window.getAllComponents = function() {
  return window.COMPONENTS;
};

// Function to get component by ID
window.getComponent = function(id) {
  return window.COMPONENTS[id];
};