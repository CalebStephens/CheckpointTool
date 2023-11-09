// Description: This file defines the table that displays the completion status of each lab for each student

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const LabsCompleted = (props) => {
  // Function to render the completion status icon for a specific lab and student
  const renderLabStatus = (labTitle, student) => {
    // Find the lab response for the specified lab title and student
    const labResponse = student.labResponses.find((response) => response.lab === labTitle);

    if (labResponse) {
      // If a response is found, render a green checkmark icon
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
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left border border-gray-300">Student's Name</th>
            {renderLabNumbers()} {/* Render lab title columns */}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {props.students.map((student, index) => (
            <tr key={student.name} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="px-6 py-4 border border-gray-300 whitespace-nowrap">{student.name}</td> {/* Render student's name */}
              {props.labs.map((lab) => (
                <td className="px-6 py-4 border border-gray-300 whitespace-nowrap text-center" key={lab.title}>
                  {renderLabStatus(lab.title, student)} {/* Render completion status for each lab and student */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabsCompleted;
