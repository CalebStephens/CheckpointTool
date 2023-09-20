import DescribeGrid from "@/components/student/describeGrid";
import Link from "next/link";
import React, { useState } from "react";

const LabDescribe = () => {
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);
  const [coords, setCoords] = useState("");
  const [ans, setAns] = useState([]);
  const [completed, setCompleted] = useState(false);

  const qs = [
    {
      question: "Use the grid to choose the point that best describes your opinion of todays lab.",
      labels: {
        x: {
          left: "Easy",
          right: "Hard",
        },
        y: {
          top: "Interesting",
          bottom: "Boring",
        },
      },
    },
    {
      question: "Use the grid to choose the point that best describes your opinion of todays lab.",
      labels: {
        x: {
          left: "Content was all new",
          right: "Content was all familiar",
        },
        y: {
          top: "I could confidently start on my own",
          bottom: "I needed help to get started",
        },
      },
    },
    {
      question: "Use the grid to choose the point that best describes your opinion of todays lab.",
      labels: {
        x: {
          left: "My Programming Skills have not imporved",
          right: "My Programming Skills have imporved",
        },
        y: {
          top: "I feel triumphant",
          bottom: "I feel frustrated",
        },
      },
    },
  ];

  const nextQuestion = () => {
    if(!coords.length){
      alert("Please select a point on the grid");
      return
    }
    if (index === qs.length - 1) {
      setCompleted(true);
    } else {
      setAns([...ans, coords]);
      setCoords("");
      setReset(!reset);
      setIndex(index + 1);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col space-y-4">
      {completed ? (
        <div className="flex justify-center items-center flex-col space-y-4">
          <h2 className="text-5xl font-extrabold">Submitted</h2>
          <Link
              type="button"
              href={"/student/home"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Go Home
            </Link>
        </div>
      ) : (
        <>
          <h2>{qs[index].question}</h2>
          <table>
            <tbody>
              <tr>
                <td className="w-48 text-right">
                  <div>{qs[index].labels.x.left}</div>
                </td>
                <td className="">
                  <table>
                    <caption style={{ captionSide: "top" }}>{qs[index].labels.y.top}</caption>
                    <caption style={{ captionSide: "bottom" }}>{qs[index].labels.y.bottom}</caption>
                    <DescribeGrid setCoords={setCoords} reset={reset} />
                  </table>
                </td>
                <td className="w-48">
                  <div>{qs[index].labels.x.right}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-evenly items-center space-x-4 w-full">
            <button
              type="button"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Skip
            </button>
            <button
              type="button"
              onClick={nextQuestion}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LabDescribe;
