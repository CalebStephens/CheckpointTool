import DescribeGrid from "@/components/student/describeGrid";
import React, {useState} from "react";

const LabDescribe = () => {
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);
  const [coords, setCoords] = useState('');
  const [ans, setAns] = useState([]);


  const qs = [
    "question1",
    "question2",
    "question3"
  ]

  const nextQuestion = () => {
    setAns([...ans, coords]);
    setCoords('');
    setReset(!reset);
    setIndex(index + 1);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col space-y-4">
      <h2>{qs[index]} {coords}</h2>
      <p>{ans}</p>

          <DescribeGrid setCoords={setCoords} reset={reset}/>
          <div className="flex justify-evenly items-center space-x-4 w-full">
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Skip</button>
        <button type="button" onClick={nextQuestion} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </div>
    </div>
  );
};

export default LabDescribe;
