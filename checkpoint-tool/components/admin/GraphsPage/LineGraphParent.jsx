import React, { useState } from "react";
import LabLine from "@/components/admin/GraphsPage/labLine";
import StudentLine from "./studentLine";

const LineGraphParent = (props) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const handlePaperSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedStudent(selectedValue);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {props.type !== "Student" ? (
        <LabLine paper={props.paper} />
      ) : (
        <>
          <div className="w-full max-w-md mb-4">
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={handlePaperSelect}>
              <option value="">Select a {props.type}</option>
              {props.paper.students.map((student, index) => (
                <option key={index} value={student.name}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>
          <StudentLine paper={props.paper} studentName={selectedStudent} />
        </>
      )}
    </div>
  );
};

export default LineGraphParent;
