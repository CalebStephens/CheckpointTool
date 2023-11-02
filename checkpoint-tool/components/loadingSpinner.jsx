import React from "react";

const LoadingSpinner = () => {
  return (
    <div id="spinner" className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
    </div>
  );
};

export default LoadingSpinner;
