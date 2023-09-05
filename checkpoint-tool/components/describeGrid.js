import React, {useState} from "react";

const DescribeGrid = () => {
    const [selectedCell, setSelectedCell] = useState(null);
  const numRows = 21;
  const numCols = 21;

  const rows = [];

  const chooseCell = (cellKey) => {
        console.log(cellKey);
        selectedCell ? window.document.querySelector(`#${selectedCell}`).style.backgroundColor = "inherit": null;
    setSelectedCell(cellKey);
    const cell = window.document.querySelector(`#${cellKey}`);
    console.log(cell);
    cell.style.backgroundColor = "red";
      };

  for (let row = 0; row < numRows; row++) {
    const cells = [];

    for (let col = 0; col < numCols; col++) {
      const cellKey = `${row}-${col}`;
      if (col === 10 || row === 10) {
        const seperatorStyles = {
          width: "5px", // Adjust the cell width as needed
          height: "5px", // Adjust the cell height as needed
          backgroundColor: "white",
          border: "1px solid white",
        };
        cells.push(<td key={cellKey}  style={seperatorStyles} className={`cell`}></td>);
      } else {
        // Generate a unique key for each cell

        const cellStyles = {
          width: "30px", // Adjust the cell width as needed
          height: "30px", // Adjust the cell height as needed

          border: "1px solid white", // Border for each cell
        };
        cells.push(<td key={cellKey} id={`c-${cellKey}`} style={cellStyles} className="cell" onClick={() => chooseCell(`c-${cellKey}`)}></td>);
      }
    }

    rows.push(
      <tr className=" border-b bg-gray-800 border-gray-700" key={row}>
        {cells}
      </tr>
    );
  }

  return (
    <table className="grid">
      <tbody>{rows}</tbody>
    </table>
  );
};

export default DescribeGrid;
