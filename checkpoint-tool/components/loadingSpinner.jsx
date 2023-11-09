// File: LoadingSpinner.jsx
// Description: This file defines a reusable LoadingSpinner component, which displays a spinning
// animation to indicate loading or processing of content in the application.

import React from "react";

// LoadingSpinner component
const LoadingSpinner = () => {
  return (
    <div id="spinner" className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
    </div>
  );
};

export default LoadingSpinner;
