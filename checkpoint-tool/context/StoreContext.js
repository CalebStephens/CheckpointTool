import { createContext, useState } from "react";

const Store = createContext();

const StoreProvider = (props) => {
 const [student, setStudent] = useState({
    studentId: "",
    lab: "",
  });

  const setStudentData = (student) => {
    setStudent((prevState) => ({ ...prevState, ...student }));
  }
  

  return (
    <Store.Provider value={{ student, setStudentData  }}>
      {props.children}
    </Store.Provider>
  );
};

export { Store, StoreProvider };