// File: CompletedCheckpoint.jsx
// Description: This file defines the CompletedCheckpoint component for the student dashboard.
// Displays the completed checkpoints for a student

import CompletedTable from "@/components/student/completedTable";
import { get } from "@/utils/api";
import React, { useState } from "react";

// CompletedCheckpoint component
const CompletedCheckpoint = (props) => {
  const [userID, setUserID] = useState("");
  const [student, setStudent] = useState(null);

  // Function to submit the form
  const submit = async () => {
    const findStudent = props.paper.students.find((student) => student.studentId === parseInt(userID));
    if (findStudent) {
      setStudent(findStudent);
    }
  };

  return (
    <div>
      <div className="p-6">
        <div className="w-1/2 flex justify-center items-center gap-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Student ID:
          </label>
          <input
            type="number"
            id="id"
            onChange={(e) => setUserID(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            required
          />
          <button
            onClick={submit}
            className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Submit
          </button>
        </div>
      </div>
      {student ? <CompletedTable student={student} labs={props.paper.labs} /> : <h2>Enter your Student ID</h2>}
    </div>
  );
};

// Server-side props fetching
export const getServerSideProps = async () => {
  const res = await get(`papers/1?timestamp=${Date.now()}`);
  const paper = res.data.data;
  return {
    props: {
      paper,
    },
  };
};

export default CompletedCheckpoint;
