import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CompletedTable = () => {
  const renderLabNumbers = () => {
    const labHeaders = [];

    for (let i = 0; i <= 25; i++) {
      labHeaders.push(
        <th scope="col" className="px-4 py-2">
          Lab {i}
        </th>
      );
    }
    return labHeaders;
  };

  const results = [];
  for (let i = 0; i <= 25; i++) {
    results.push(
      <td className="px-4 py-2">
        <FontAwesomeIcon icon={faCheck} />
      </td>
    );
  }

  return (
    <div>
      <table className="text-sm text-center text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Student's Name</th>
            {renderLabNumbers()}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-2 py-2">Bob</td>
            {results}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTable;
