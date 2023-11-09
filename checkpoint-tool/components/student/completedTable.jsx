// This component shows a student which labs they have completed and which they have not.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CompletedTable = (props) => {
  // Function to render the completion status icon for a lab
  const renderLabStatus = (labTitle) => {
    // Find the lab response for the specified lab title
    const labResponse = props.student.labResponses.find((response) => response.lab === labTitle);

    if (labResponse) {
      // If a response is found, render a checkmark icon in green
      return <FontAwesomeIcon icon={faCheck} color="green" className="text-green-500 text-2xl mx-auto" />;
    }
  };

  // Function to render table header columns for lab titles
  const renderLabNumbers = () => {
    return props.labs.map((lab) => (
      <th className="px-4 py-2 border border-gray-300 text-center" key={lab.title}>
        {lab.title}
      </th>
    ));
  };

  return (
    <div>
      <table className="text-sm text-center text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Student's Name</th>
            {renderLabNumbers()} {/* Render lab title columns */}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-2 py-2">{props.student.name}</td> {/* Render student's name */}
            {props.labs.map((lab) => (
              <td className="px-4 py-2" key={lab.title}>
                {renderLabStatus(lab.title)} {/* Render completion status for each lab */}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTable;
