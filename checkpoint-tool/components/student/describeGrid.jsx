import React, { useState, useEffect } from "react";

const DescribeGrid = (props) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const numRows = 21;
  const numCols = 21;

  const rows = [];

  const chooseCell = (cellKey) => {
    clearCell();
    let coords = cellKey.substr(1).split("#");
    coords = {
      x: parseInt(coords[0]),
      y: parseInt(coords[1]),
    };
    props.setCoords(coords);
    setSelectedCell(cellKey);
    const cellElement = window.document.getElementById(cellKey); // Use getElementById
    if (cellElement) {
      cellElement.style.backgroundColor = "#2463EB";
    }
  };

  const clearCell = () => {
    if (selectedCell) {
      const selectedElement = window.document.getElementById(selectedCell); // Use getElementById
      if (selectedElement) {
        selectedElement.style.backgroundColor = "inherit";
      }
      setSelectedCell(null);
    }
  };

  useEffect(() => {
    const resetCell = () => {
      clearCell();
      setSelectedCell(null);
    };
    resetCell();
  }, [props.reset]);

  for (let row = 10; row >= -10; row--) {
    // Reversed the row loop to start from 10 and go to -10
    const cells = [];

    for (let col = -10; col <= 10; col++) {
      const cellKey = `c${col}#${row}`; // Modify the format here
      if (col === 0 || row === 0) {
        cells.push(<td key={cellKey} className="cell w-1 h-1 bg-white border-2 border-white"></td>);
      } else {
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
    rows.push(
      <tr className="border-b bg-gray-800 border-gray-700" key={row}>
        {cells}
      </tr>
    );
  }

  return <tbody>{rows}</tbody>;
};

export default DescribeGrid;
