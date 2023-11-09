// File: LabDescribe.jsx
// Description: This file defines the LabDescribe component for the student dashboard.
// Allows the student to complete the lab by selecting points on the grid

import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/loadingSpinner";
import DescribeGrid from "@/components/student/describeGrid";
import { get, put } from "@/utils/api";

// LabDescribe component
const LabDescribe = (props) => {
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);
  const [coords, setCoords] = useState("");
  const [ans, setAns] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [student, setStudent] = useState();

  const router = useRouter();

  useEffect(() => {
    // Check if the student is authorized to access the lab
    const checkStudent = async () => {
      const res = await get(`students/${router.query.id}?time=${Date.now()}`);
      if (res.status !== 200) {
        router.push("/student/home"); // Redirect to the home page if not authorized
      } else {
        setStudent(res.data.data);
      }
    };
    checkStudent();
  }, []);

  const labName = router.query.labName.substring(0, 3) + " " + router.query.labName.substring(3);

  const submitResponse = async () => {
    // Submit the lab response
    const res = await put(`students/labResponse`, {
      student: student,
      answers: ans,
      labName: labName,
    });

    // Check the response status and handle accordingly
    res.status === 200 ? (setSubmit(false), setCompleted(true)) : router.push("/student/home");
  };

  useEffect(() => {
    const submission = async () => {
      if (submit && ans.length === props.tool.questions.length) {
        submitResponse();
      }
    };
    submission();
  }, [submit]);

  const handleQuestion = (isSkipped) => {
    if (!Object.keys(coords).length && !isSkipped) {
      alert("Please select a point on the grid");
      return;
    }

    const answer = isSkipped ? "Skipped" : coords;
    setAns([...ans, answer]);

    if (index === props.tool.questions.length - 1) {
      setSubmit(true);
    } else {
      setCoords("");
      setReset(!reset);
      setIndex(index + 1);
    }
  };

  return Object.keys(props.tool).length ? (
    <div className="w-full h-screen flex justify-center items-center flex-col space-y-4">
      {submit ? (
        <LoadingSpinner /> // Show the loading spinner when submitting
      ) : completed ? (
        <div className="flex justify-center items-center flex-col space-y-4">
          <h2 className="text-5xl font-extrabold">Submitted</h2>
          <Link href="/student/home" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Go Home
          </Link>
        </div>
      ) : (
        <>
          <h2>{props.tool.questions[index].question}</h2>
          <table>
            <tbody>
              <tr>
                <td className="w-48 text-right">
                  <div>{props.tool.questions[index].labels.x.left}</div>
                </td>
                <td>
                  <table>
                    <caption style={{ captionSide: "top" }}>{props.tool.questions[index].labels.y.top}</caption>
                    <caption style={{ captionSide: "bottom" }}>{props.tool.questions[index].labels.y.bottom}</caption>
                    <DescribeGrid setCoords={setCoords} reset={reset} />
                  </table>
                </td>
                <td className="w-48">
                  <div>{props.tool.questions[index].labels.x.right}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-evenly items-center space-x-4 w-full">
            <button
              type="button"
              onClick={() => handleQuestion(true)}
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover-bg-gray-100 hover-text-blue-700 focus-z-10 focus-ring-4 focus-ring-gray-200">
              Skip
            </button>
            <button
              type="button"
              onClick={() => handleQuestion(false)}
              className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  ) : (
    <LoadingSpinner />
  );
};

// Server-side props fetching
export const getServerSideProps = async () => {
  const resTool = await get(`tools/1`);
  const tool = resTool.data.data;
  return {
    props: {
      tool,
    },
  };
};

export default LabDescribe;
