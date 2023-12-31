// runs the student admin page, this controls adding, deleting and bulk uploading students

import { useState } from "react";
import * as XLSX from "xlsx";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { get, post, del } from "@/utils/api";

const StudentAdmin = (props) => {
  // Initialize state for students and new student entry
  const [students, setStudents] = useState(props.students);
  const [addNewStudent, setAddNewStudent] = useState(false);
  const [manualNewStudent, setManualNewStudent] = useState({
    name: "",
    studentId: null,
    email: "",
    paperId: 1,
  });

  // Function to read an Excel file and extract student data
 // https://www.c-sharpcorner.com/article/how-to-read-excel-file-in-next-js-application/
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {
          type: "buffer",
        });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      sendStudentList(d);
    });
  };

  // Function to send the extracted student list to the server
  const sendStudentList = async (data) => {
    const newList = await Promise.all(
      data.map(async (student) => {
        let name =
          student["Learner Name"].split(",")[1].split(" ")[1] +
          " " +
          student["Learner Name"].split(",")[0].toLowerCase().charAt(0).toUpperCase() +
          student["Learner Name"].split(",")[0].toLowerCase().slice(1);
        let newStudent = {
          name,
          studentId: student["Person Code"],
          email: student["Study Email"],
          paperId: 1,
        };

        const res = await post(`students/create`, newStudent);
        return res.data;
      })
    );

    await Promise.all(newList);
    const updatedList = await get(`students?timestamp=${Date.now()}`);
    setStudents(updatedList.data.data);
  };

  // Function to delete a student by their student ID or all students
  const deleteStudent = async (studentId) => {
    if (studentId == "all") {
      const res = await del(`students/deleteAll`);
      setStudents([]);
    } else {
      const res = await del(`students/delete/${studentId}`);
      const updatedList = await get(`students?timestamp=${Date.now()}`);
      setStudents(updatedList.data.data);
    }
  };

  // Function to add a new student manually
  const addStudent = async () => {
    try {
      if (!manualNewStudent.name || manualNewStudent.studentId === 0 || !manualNewStudent.email) {
        return alert("Please fill in all fields");
      }
      const res = await post(`students/create`, manualNewStudent);
      if (res.status == 400) return alert("Student already exists");
      setManualNewStudent({
        name: "",
        studentId: 0,
        email: "",
        paperId: 1,
      });
      const updatedList = await get(`students?timestamp=${Date.now()}`);
      setStudents(updatedList.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Student Setup</h1>
      <div className="flex items-center m-4 gap-2">
        <label htmlFor="extra-labs" className="text-sm font-bold text-gray-900">
          Upload Student List:
        </label>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
          accept=".xlsx, .xls, .XLS, .XLSX"
          className="flex p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {students.length > 0 ? (
        <div className="flex items-center space-x-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Student ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Student Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((d, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td scope="row" className="px-6 py-4 w-1/4 font-medium text-gray-900 whitespace-nowrap">
                    {d.name}
                  </td>
                  <td className="px-6 py-4 w-1/4">{d.studentId}</td>
                  <td className="px-6 py-4 w-1/4">{d.email}</td>
                  <td className="px-6 py-4" onClick={() => deleteStudent(d.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              ))}
              {addNewStudent && (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 w-1/4">
                    <input
                      type="text"
                      onChange={(value) => setManualNewStudent({ ...manualNewStudent, name: value.target.value })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Student Name..."
                      value={manualNewStudent.name}
                      required
                    />
                  </td>
                  <td className="px-6 py-4 w-1/4">
                    <input
                      type="number"
                      onChange={(value) => setManualNewStudent({ ...manualNewStudent, studentId: Number(value.target.value) })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Student ID..."
                      min={0}
                      required
                    />
                  </td>
                  <td className="px-6 py-4 w-1/4">
                    <input
                      type="email"
                      onChange={(value) => setManualNewStudent({ ...manualNewStudent, email: value.target.value })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Student Email..."
                      value={manualNewStudent.email}
                      required
                    />
                  </td>
                  <td className="px-6 py-4 text-red-600">
                    <button
                      type="button"
                      onClick={() => addStudent()}
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2">
                      Save
                    </button>
                  </td>
                </tr>
              )}
              <tr className="bg-white border-b">
                <td className="px-6 py-4">
                  <button
                    onClick={() => setAddNewStudent(!addNewStudent)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Add Student
                  </button>
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-red-600" onClick={() => deleteStudent("all")}>
                  <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Delete All
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>No students in this list</div>
      )}
    </>
  );
};

export default StudentAdmin;


