import DescribeGrid from "@/components/student/describeGrid";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Store } from "@/context/StoreContext";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/loadingSpinner";

const LabDescribe = (props) => {
  const { student } = useContext(Store);
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);
  const [coords, setCoords] = useState("");
  const [ans, setAns] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [completed, setCompleted] = useState(false);

  const path = "http://localhost:3000/api/v1";
  const router = useRouter();

  useEffect(() => {
    const checkStudent = async () => {
      if (student.studentId === "" || student.lab === "") {
        router.push("/student/home");
      }
    };
    checkStudent();
  }, []);

  const submitResponse = async () => {
    const res = await axios.put(`${path}/students/labResponse`, {
      student: student,
      answers: ans,
    });

    res.status === 200 ? (setSubmit(false), setCompleted(true)) : router.push("/student/home");
    console.log(res);
  };

  useEffect(() => {
    const submission = async () => {
      if (ans.length === props.tool.questions.length) {
        submitResponse();
      }
    };
    submission();
  }, [submit]);

  const nextQuestion = () => {
    if (!coords.length) {
      alert("Please select a point on the grid");
      return;
    }

    setAns([...ans, coords]);
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
          <Link
            href="/student/home"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
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
  ) : (
    <LoadingSpinner />
  );
};

export const getServerSideProps = async () => {
  const path = "http://localhost:3000/api/v1";
  const resTool = await axios.get(`${path}/tools/1`);
  const tool = resTool.data.data;
  return {
    props: {
      tool,
    },
  };
};

export default LabDescribe;
