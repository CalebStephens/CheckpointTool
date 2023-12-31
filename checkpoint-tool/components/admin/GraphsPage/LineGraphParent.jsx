// Displays a line graph for a selected lab or student 

import React, { useState } from "react";
import LabLine from "@/components/admin/GraphsPage/labLine";
import StudentLine from "./studentLine";

const LineGraphParent = (props) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Event handler for selecting a student
  const handlePaperSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedStudent(selectedValue);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {props.type !== "Student" ? (
        // Render LabLine component if the selected type is not "Student"
        <LabLine paper={props.paper} />
      ) : (
        <>
          <div className="w-full max-w-md mb-4">
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={handlePaperSelect}>
              <option value="">Select a {props.type}</option>

              {/* Render options for selecting a student */
              props.paper.students.map((student, index) => (
                <option key={index} value={student.name}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>

          {/* Render StudentLine component with the selected student */}
          <StudentLine paper={props.paper} studentName={selectedStudent} />
        </>
      )}
    </div>
  );
};

export default LineGraphParent;
