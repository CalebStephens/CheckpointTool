// File: Checkpoint.jsx
// Description: This file defines the Checkpoint component for the student dashboard.
// Set which lab is being checked off as complete and for which student, checks if lab has already been completed

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { get } from "@/utils/api";
import Layout from "@/components/student/layout";

// Checkpoint component
const Checkpoint = (props) => {
  const [password, setPassword] = useState("");
  const [student, setStudentData] = useState({
    id: null,
    lab: "",
  });
  const [labPassword, setLabPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (student.lab) {
      const selectedLab = props.paper.labs.find((lab) => lab.title === student.lab);
      if (selectedLab) {
        setLabPassword(selectedLab.password);
      }
    }
  }, [student.lab, props.paper.labs]);

  const auth = async (e) => {
    e.preventDefault();
    if (student.studentId === "" || student.lab === "") {
      alert("Please select a student and lab");
      return;
    }

    const response = await get(`students/${student.id}`);

    if (response.data.data.labResponses.find((lab) => lab.lab === student.lab)) {
      alert("This lab has already been completed");
      return;
    }

    if (labPassword === password) {
      router.push({
        pathname: `/student/labComplete/${student.id}/${student.lab.split(" ").join("")}`,
      });
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <Layout>
    <div className="pl-6 pr-6 pt-24">
      <form>
        <div className="mb-6">
          <label htmlFor="student" className="block mb-2 text-sm font-medium text-gray-900">
            Student Name:
          </label>
          <select
            id="student"
            onChange={(e) => setStudentData({ ...student, id: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="">Choose a Student</option>
            {props.paper.students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name} ({student.studentId})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6 flex flex-row gap-6 w-full">
          <div className="w-1/2">
            <label htmlFor="lab" className="block mb-2 text-sm font-medium text-gray-900">
              Lab Number:
            </label>
            <select
              id="lab"
              onChange={(e) => setStudentData({ ...student, lab: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="">Choose a Lab</option>
              {props.paper.labs.map((lab) => (
                <option key={lab.id} value={lab.title}>
                  {lab.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Lab Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <button
          onClick={auth}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Mark Complete
        </button>
      </form>
    </div>
    </Layout>
  );
};

// Server-side props fetching
export const getServerSideProps = async () => {
  const resStudents = await get(`papers/1?timestamp=${Date.now()}`);
  const paper = resStudents.data.data;
  return {
    props: {
      paper,
    },
  };
};

export default Checkpoint;
