import React, { useState } from "react";

import CompletedTable from "@/components/student/completedTable";
import { get } from "@/utils/api";
import Layout from "@/components/student/layout";

const CompletedCheckpoint = (props) => {
  const [userID, setUserID] = useState("");
  const [student, setStudent] = useState(null);

  const submit = async () => {
    const findStudent = props.paper.students.find((student) => student.studentId === parseInt(userID));
    if (findStudent) {
      setStudent(findStudent);
    }
  };

  return (
    <Layout>
      <div className="p-6 sm:p-12 md:p-24">
        <div className="w-1/2 flex flex-col items-center space-y-4">
          <label htmlFor="id" className="mb-2 text-sm font-medium text-gray-900">
            Student ID:
          </label>
          <input
            type="number"
            id="id"
            onChange={(e) => setUserID(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
            required
          />
          <button
            onClick={submit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full sm:w-auto text-center">
            Submit
          </button>
        </div>
      </div>
      {student ? <CompletedTable student={student} labs={props.paper.labs} /> : null}
    </Layout>
  );
};

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
