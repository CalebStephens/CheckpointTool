import { createContext, useState } from "react";

const StudentContext = createContext();

const StudentProvider = (props) => {
 const [student, setStudent] = useState({
    studentId: "",
    lab: "",
  });

  const setStudentData = (student) => {
    setStudent((prevState) => ({ ...prevState, ...student }));
  }
  

  return (
    <StudentContext.Provider value={{ student, setStudentData  }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };