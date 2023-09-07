import React, { useState } from "react";

const DescribeGrid = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const numRows = 21;
  const numCols = 21;

  const rows = [];

  const chooseCell = (cellKey) => {
    console.log(cellKey);
    selectedCell ? (window.document.querySelector(`#${selectedCell}`).style.backgroundColor = "inherit") : null;
    setSelectedCell(cellKey);
    window.document.querySelector(`#${cellKey}`).style.backgroundColor = "red";
  };

  for (let row = 0; row < numRows; row++) {
    const cells = [];

    for (let col = 0; col < numCols; col++) {
      const cellKey = `${row}-${col}`;
      if (col === 10 || row === 10) {
        
        cells.push(<td key={cellKey}  className='cell w-1 h-1 bg-white border-2 border-white'></td>);
      } else {
        const cellStyles = {
          width: "30px", 
          height: "30px", 
        };
        cells.push(<td key={cellKey} id={`c-${cellKey}`} style={cellStyles} className="border border-white" onClick={() => chooseCell(`c-${cellKey}`)}></td>);
      }
    }
    rows.push(
      <tr className=" border-b bg-gray-800 border-gray-700" key={row}>
        {cells}
      </tr>
    );
  }

  return (
<table>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default DescribeGrid;
