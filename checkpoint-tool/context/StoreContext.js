import React,{ createContext, useState, useEffect } from "react";

const StoreContext = createContext();

const StoreProvider = (props) => {
 const [student, setStudent] = useState({
    studentId: "",
    lab: "",
  });

  const [paper, setPaper] = useState(
    {
      id: null,
      name:"",
      labs: [],
      students: [],
      tool: {}
    }
  );

  const setStudentData = (student) => {
    setStudent((prevState) => ({ ...prevState, ...student }));
  }

  const setPaperData = (incomingPaper) => {
    console.log(incomingPaper);
    setPaper((prevState) => ({ ...prevState, ...incomingPaper }));
     
  }

  const clearContext = () => {
    setPaper(
      {
        id: null,
        name:"",
        labs: [],
        students: [],
        tool: {}
      }
    );
  }

  return (
    <StoreContext.Provider value={{ student, paper, setStudentData, setPaperData, clearContext}}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };