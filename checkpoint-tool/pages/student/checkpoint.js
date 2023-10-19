import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import axios from "axios";

const Checkpoint = (props) => {
  const { student } = useContext(StoreContext);
  const { setStudentData } = useContext(StoreContext);
  const [password, setPassword] = useState("");

  const router = useRouter();

  const auth = (e) => {
    e.preventDefault();
    if (student.name === "" || student.lab === "") {
      alert("Please select a student and lab");
      return;
    }

    const pass = `${student.lab}5${parseInt(student.lab) * 5}`;

    pass === password ? router.push("./labDescribe") : alert("Incorrect Password");
  };

  return (
    <div className="p-6">
      <form>
        <div className="mb-6">
          <label htmlFor="student" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Student Name:
          </label>
          <select
            id="student"
            onChange={(e) => setStudentData({ ...student, studentId: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Choose a Student</option>
            {props.students.map((student) => (
              <option key={student.id} value={student.studentId}>
                {student.name} ({student.studentId})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6 flex flex-row gap-6 w-full">
          <div className="w-1/2">
            <label htmlFor="lab" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lab Number:
            </label>
            <select
              id="lab"
              onChange={(e) => setStudentData({ ...student, lab: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Choose a Lab</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lab Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          onClick={auth}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Mark Complete
        </button>
      </form>
    </div>
  );
};

export const getServerSideProps = async () => {
  const path = "http://localhost:3000/api/v1";
  const resStudents = await axios.get(`${path}/students`);
  const students = resStudents.data.data;
  return {
    props: {
      students,
    },
  };
};

export default Checkpoint;
