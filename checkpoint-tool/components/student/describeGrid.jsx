// Desc: This component renders a grid of cells that can be selected by the student to describe 
// how the feel for each question

import React, { useState, useEffect } from "react";

const DescribeGrid = (props) => {
  // Define state to keep track of the selected cell
  const [selectedCell, setSelectedCell] = useState(null);

  // An array to store rows
  const rows = [];

  // Function to handle cell selection
  const chooseCell = (cellKey) => {
    // Clear the previously selected cell
    clearCell();
    // Extract coordinates from the cell key
    let coords = cellKey.substr(1).split("#");
    coords = {
      x: parseInt(coords[0]),
      y: parseInt(coords[1]),
    };
    // Call a function provided through props and pass coordinates
    props.setCoords(coords);
    // Set the currently selected cell
    setSelectedCell(cellKey);
    // Get the DOM element of the cell by its id
    const cellElement = window.document.getElementById(cellKey);
    if (cellElement) {
      // Change the background color of the selected cell
      cellElement.style.backgroundColor = "#2463EB";
    }
  };

  // Function to clear the selected cell
  const clearCell = () => {
    if (selectedCell) {
      // Get the previously selected cell's DOM element by id
      const selectedElement = window.document.getElementById(selectedCell);
      if (selectedElement) {
        // Restore the background color to its default value
        selectedElement.style.backgroundColor = "inherit";
      }
      // Clear the selected cell in state
      setSelectedCell(null);
    }
  };

  // useEffect to reset the cell when the 'props.reset' value changes
  useEffect(() => {
    const resetCell = () => {
      clearCell();
      setSelectedCell(null);
    };
    resetCell();
  }, [props.reset]);

  // Loop to create rows and cells for a grid
  for (let row = 10; row >= -10; row--) {
    // Reversed the row loop to start from 10 and go to -10
    const cells = [];

    for (let col = -10; col <= 10; col++) {
      const cellKey = `c${col}#${row}`; // Modify the format here
      if (col === 0 || row === 0) {
        // Create non-selectable cells for the grid borders
        cells.push(
          <td key={cellKey} className="cell w-1 h-1 bg-white border-2 border-white"></td>
        );
      } else {
        // Create selectable cells with click event
        const cellStyles = {
          width: "25px",
          height: "25px",
        };
        cells.push(
          <td
            key={cellKey}
            id={cellKey} // Modify the id attribute
            style={cellStyles}
            className="border border-white"
            onClick={() => chooseCell(cellKey)} // Modify the parameter here
          ></td>
        );
      }
    }
    // Create a row with cells
    rows.push(
      <tr className="border-b bg-gray-800 border-gray-700" key={row}>
        {cells}
      </tr>
    );
  }

  // Render the grid with rows and cells
  return <tbody>{rows}</tbody>;
};

export default DescribeGrid;
