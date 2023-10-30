import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSquareCheck, faLock, faChartSimple, faDatabase, faTable, faBars, faTriangleExclamation, faHouse, faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const LabsCompleted = (props) => {
  const labNumber = 25;
  const users = [
    {
      name: "Caleb Stevens",
      labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true",
    },
    {
      name: "Grayson Orr",
      labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true",
    },
    {
      name: "Marco Koen",
      labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, true, true, true",
    },
  ];

  console.log(props.paper)

  const renderLabNumbers = () => {
    const labHeaders = [];

    for (let i = 0; i <= labNumber; i++) {
      labHeaders.push(
        <th scope="col" className="px-4 py-2">
          Lab {i}
        </th>
      );
    }
    return labHeaders;
  };

  const renderUsers = () => {
    const userRows = [];
    users.forEach((user) => {
      userRows.push(
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-2 py-2">{user.name}</td>
          {user.labs.split(", ").map((lab, index) => (
            <td className="px-2 py-2" key={index}>
              {lab === "true" ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faX} />}
            </td>
          ))}
        </tr>
      );
    });
    return userRows;
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-white">Labs Completed By Students</h1>
      <table className="text-sm text-center text-gray-500">
        <thead className="text-xs bg-gray-50">
          <tr>
            <th className="px-6 py-3">Student's Name</th>
            {renderLabNumbers()}
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  );
};


export default LabsCompleted;
