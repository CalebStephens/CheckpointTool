import { useState } from "react";

const ShowTables = () => {
  const tableNames = { tableNames: ["admin", "attendance", "completion", "data", "students", "tool"] };
  const adminTable = [
    { adminID: "1", firstName: "John", lastName: "Doe", username: "jdoe" },
    { adminID: "2", firstName: "Jane", lastName: "Doe", username: "jadoe" },
  ];
  const studentData = [
    {
      "Student ID": "001",
      "Student Number": "S12345",
      "First Name": "John",
      "Last Name": "Doe",
      Username: "johndoe",
    },
    {
      "Student ID": "002",
      "Student Number": "S67890",
      "First Name": "Jane",
      "Last Name": "Smith",
      Username: "janesmith",
    },
    {
      "Student ID": "003",
      "Student Number": "S54321",
      "First Name": "Michael",
      "Last Name": "Johnson",
      Username: "michaeljohnson",
    },
    // Add more entries as needed
  ];
  const [tableName, setTableName] = useState(true);
  const [admin, setAdmin] = useState(true);
  const [student, setStudent] = useState(true);

  const renderTableNames = () => {
    const tableRows = [];
    tableNames.tableNames.forEach((table) => {
      tableRows.push(
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-2 py-2">{table}</td>
        </tr>
      );
    });
    return tableRows;
  };

  const renderAdminTable = () => {
    const adminRows = [];
    adminTable.forEach((admin) => {
      adminRows.push(
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-2 py-2">{admin.adminID}</td>
          <td className="px-2 py-2">{admin.firstName}</td>
          <td className="px-2 py-2">{admin.lastName}</td>
          <td className="px-2 py-2">{admin.username}</td>
        </tr>
      );
    });
    return adminRows;
  };

  const renderStudentTable = () => {
    const studentRows = [];
    studentData.forEach((student) => {
      studentRows.push(
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-2 py-2">{student["Student ID"]}</td>
          <td className="px-2 py-2">{student["Student Number"]}</td>
          <td className="px-2 py-2">{student["First Name"]}</td>
          <td className="px-2 py-2">{student["Last Name"]}</td>
          <td className="px-2 py-2">{student["Username"]}</td>
        </tr>
      );
    });
    return studentRows;
  };

  const toggleStudentTable = () => {
    setStudent(!student);
  };

  const toggleTableNames = () => {
    setTableName(!tableName);
  };
  const toggleAdminTable = () => {
    setAdmin(!admin);
  };

  return (
    <>
      <h1>Database Contents</h1>

      <h2>Database Tables</h2>
      <table className="text-sm text-center text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" onClick={toggleTableNames}>
              Table Name
            </th>
          </tr>
        </thead>
        <tbody>{tableName ? renderTableNames() : null}</tbody>
      </table>

      <h2>Admin Table</h2>
      <table className="text-sm text-center text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50" onClick={toggleAdminTable}>
          <tr>
            <th className="px-6 py-3">Admin ID</th>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Username</th>
          </tr>
        </thead>
        <tbody>{admin ? renderAdminTable() : null}</tbody>
      </table>
      <h2>Students Table</h2>
      <table className="text-sm text-center text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50" onClick={toggleStudentTable}>
          <tr>
            <th className="px-6 py-3">Student ID</th>
            <th className="px-6 py-3">Student Number</th>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Username</th>
          </tr>
        </thead>
        <tbody>{student ? renderStudentTable() : null}</tbody>
      </table>
    </>
  );
};

export default ShowTables;
