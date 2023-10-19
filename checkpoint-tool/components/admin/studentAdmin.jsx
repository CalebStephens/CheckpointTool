import { useState, useContext, useEffect } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "@/context/StoreContext";

const StudentAdmin = (props) => {
  // const { paper, setPaperData } = useContext(StoreContext);
  const [students, setStudents] = useState(props.students);
  const path = "http://localhost:3000/api/v1";
  const [addNewStudent, setAddNewStudent] = useState(false);
  const [manualNewStudent, setManualNewStudent] = useState({
    name: "",
    studentId: 0,
    email: "",
    paperId: 1,
  });

  //https://www.c-sharpcorner.com/article/how-to-read-excel-file-in-next-js-application/
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

  const sendStudentList = async (data) => {
    const newList = await Promise.all(
      data.map(async (student) => {
        let name =
          student["Learner Name"].split(",")[1].split(" ")[1] +
          " " +
          student["Learner Name"].split(",")[0].toLowerCase().charAt(0).toUpperCase() +
          student["Learner Name"].split(",")[0].toLowerCase().slice(1);
        console.log(name, "name");
        let newStudent = {
          name,
          studentId: student["Person Code"],
          email: student["Study Email"],
          paperId: 1,
        };

        const res = await axios.post(`${path}/students/create`, newStudent);
        return res.data;
      })
    );

    await Promise.all(newList);
    const updatedList = await axios.get(`${path}/students?timestamp=${Date.now()}`);
    console.log(updatedList);
    setStudents(updatedList.data.data);
    // await setPaperData({ ...paper, students: updatedList.data.data });
  };

  const deleteStudent = async (studentId) => {
    if (studentId == "all") {
      const res = await axios.delete(`${path}/students/deleteAll`);
      setStudents([]);
      // await setPaperData({ ...paper, students: [] });
    } else {
      console.log(studentId, "studentId");
      const res = await axios.delete(`${path}/students/delete/${studentId}`);
      const updatedList = await axios.get(`${path}/students?timestamp=${Date.now()}`);
      setStudents(updatedList.data.data);
      // await setPaperData({ ...paper, students: updatedList.data.data });
    }
  };

  const addStudent = async () => {
    try {
      if (!manualNewStudent.name || manualNewStudent.studentId === 0 || !manualNewStudent.email) {
        return alert("Please fill in all fields");
      }
      const res = await axios.post(`${path}/students/create`, manualNewStudent);
      if (res.status == 400) return alert("Student already exists");
      console.log(res);
      setManualNewStudent({
        name: "",
        studentId: 0,
        email: "",
        paperId: 1,
      });
      const updatedList = await axios.get(`${path}/students?timestamp=${Date.now()}`);
      setStudents(updatedList.data.data);
      // await setPaperData({ ...paper, students: updatedList.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Student Setup</h1>
      <div className="flex items-center m-4 gap-2">
        <label htmlFor="extra-labs" className=" text-sm font-bold text-gray-900">
          Upload Student List:
        </label>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
          accept=".xlsx, .xls, .XLS, .XLSX"
          className="flex p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      {students.length > 0 ? (
        <div className="flex items-center space-x-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                  <td scope="row" className="px-6 py-4 w-1/4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 w-1/4">
                    <input
                      type="text"
                      onChange={(value) => setManualNewStudent({ ...manualNewStudent, name: value.target.value })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Student Name..."
                      value={manualNewStudent.name}
                      required
                    />
                  </td>
                  <td className="px-6 py-4 w-1/4">
                    <input
                      type="number"
                      onChange={(value) => setManualNewStudent({ ...manualNewStudent, studentId: Number(value.target.value) })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Student ID..."
                      value={manualNewStudent.studentId}
                      min={0}
                      required
                    />
                  </td>
                  <td className="px-6 py-4 w-1/4">
                    <input
                      type="email"
                      onChange={(value) => setManualNewStudent({ ...manualNewStudent, email: value.target.value })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Student Email..."
                      value={manualNewStudent.email}
                      required
                    />
                  </td>
                  <td className="px-6 py-4 text-red-600">
                    <button
                      type="button"
                      onClick={() => addStudent()}
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Save
                    </button>
                  </td>
                </tr>
              )}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <button
                    onClick={() => setAddNewStudent(!addNewStudent)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add Student
                  </button>
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-red-600" onClick={() => deleteStudent("all")}>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
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
