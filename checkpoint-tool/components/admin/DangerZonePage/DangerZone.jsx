// Shows a table of students who have answered a question in a way that shows they may not understand the material

import React, { useState, useEffect } from "react";
import { get } from "@/utils/api";

const DangerZone = (props) => {
  // Initialize state variables
  const studentData = props.students.data.data;
  const [studentList, setStudentList] = useState([]);
  const [tool, setTool] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use the useEffect hook to fetch data and update state when studentData changes
  useEffect(() => {
    const fetchTool = async () => {
      try {
        // Fetch the tool data
        const res = await get(`tools?timestamp=${Date.now()}`);
        if (res.status === 200) {
          // Set the tool data and mark loading as false
          setTool(res.data.data[0].questions);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const updatedStudentList = [];
    studentData.forEach((student) => {
      student.labResponses.forEach((lab) => {
        lab.answers.forEach((answer, question) => {
          // Filter and process data where X and Y values are less than -1
          if (answer.x < -1 && answer.y < -1) {
            const newEntry = {
              studentInformation: student,
              labName: lab,
              labAnswers: answer,
              question: question,
            };
            updatedStudentList.push(newEntry);
          }
        });
      });
    });

    // Set the filtered student list
    setStudentList(updatedStudentList);
    // Fetch tool data
    fetchTool();
  }, [studentData]);

  // Function to render a table for a specific question value
  const renderTable = (questionValue) => {
    // Filter students with the specified question value
    const filteredStudents = studentList.filter((student) => student.question === questionValue);

    return (
      <div>
        <h2 className="text-1xl m-4 flex justify-center items-center font-extrabold text-cyan-950">
          {tool[questionValue].labels.x.left} vs {tool[questionValue].labels.x.right}
        </h2>
        <div className="flex items-center space-x-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Lab Name
                </th>
                <th scope="col" className="px-6 py-3">
                  X Value
                </th>
                <th scope="col" className="px-6 py-3">
                  Y Value
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.studentInformation.id + student.labName.lab}>
                  <td className="px-6 py-4">{student.studentInformation.name}</td>
                  <td className="px-6 py-4">{student.labName.lab}</td>
                  <td className="px-6 py-4">{student.labAnswers.x}</td>
                  <td className="px-6 py-4">{student.labAnswers.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        // Show "Loading..." when data is being fetched
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Reports on Students</h1>
          {renderTable(0)}
          {renderTable(1)}
          {renderTable(2)}
        </div>
      )}
    </>
  );
};

export default DangerZone;
