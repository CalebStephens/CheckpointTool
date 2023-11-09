import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const LabsCompleted = (props) => {
  const renderLabStatus = (labTitle, student) => {
    const labResponse = student.labResponses.find((response) => response.lab === labTitle);

    if (labResponse) {
      return <FontAwesomeIcon icon={faCheck} color="green" className="text-green-500 text-2xl mx-auto" />;
    }
  };

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
            {renderLabNumbers()}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {props.students.map((student, index) => (
            <tr key={student.name} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="px-6 py-4 border border-gray-300 whitespace-nowrap">{student.name}</td>
              {props.labs.map((lab) => (
                <td className="px-6 py-4 border border-gray-300 whitespace-nowrap text-center" key={lab.title}>
                  {renderLabStatus(lab.title, student)}
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
