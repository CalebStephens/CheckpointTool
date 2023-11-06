import React, {useState} from 'react'
import ScatterGraph from './labScatter';
import StudentScatter from './studentScatter';


const ScatterGraphParent = (props) => {
    const [selectedLab, setSelectedLab] = useState(null);

    const handlePaperSelect = (event) => {
      const selectedValue = event.target.value;
      setSelectedLab(selectedValue);
    };
  
    return (
        <div className="flex flex-col items-center p-4">  
          <div className="w-full max-w-md mb-4">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              onChange={handlePaperSelect}
            >
              <option value="">Select a {props.type}</option>
              {props.type === "Lab" ? (
              props.paper.labs.map((lab, index) => (
                <option key={index} value={lab.title}>
                  {lab.title}
                </option>
              ))): (
                props.paper.students.map((student, index) => (
                  <option key={index} value={student.name}>
                    {student.name}
                  </option>
                ))
              )}
            </select>
          </div>
  
          {(props.type === 'Lab') ? (
            selectedLab &&
            <ScatterGraph
              students={props.paper.students}
              tool={props.paper.tool}
              labName={selectedLab}
            />
          ): 
          <StudentScatter
            paper={props.paper}
            studentName={selectedLab}
            />
          }
        </div>
    );
  };

export default ScatterGraphParent;
