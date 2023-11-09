// Displays a scatter graph for a selected lab or student

import React, { useState } from "react";
import ScatterGraph from "./labScatter";
import StudentScatter from "./studentScatter";

const ScatterGraphParent = (props) => {
  const [selectedLab, setSelectedLab] = useState(null);

  // Event handler for selecting a lab or student
  const handlePaperSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedLab(selectedValue);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md mb-4">
        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={handlePaperSelect}>
          <option value="">Select a {props.type}</option>

          {/* Render lab or student options based on the selected type */}
          {props.type === "Lab"
            ? props.paper.labs.map((lab, index) => (
                <option key={index} value={lab.title}>
                  {lab.title}
                </option>
              ))
            : props.paper.students.map((student, index) => (
                <option key={index} value={student.name}>
                  {student.name}
                </option>
              ))}
        </select>
      </div>

      {props.type === "Lab" ? (
        // Render ScatterGraph component if a lab is selected
        selectedLab && <ScatterGraph students={props.paper.students} tool={props.paper.tool} labName={selectedLab} />
      ) : (
        // Render StudentScatter component if a student is selected
        <StudentScatter paper={props.paper} studentName={selectedLab} />
      )}
    </div>
  );
};

export default ScatterGraphParent;
