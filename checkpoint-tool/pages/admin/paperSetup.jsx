import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { StoreContext, StoreProvider } from "@/context/StoreContext";

import Layout from "@/components/admin/layout";
import StudentUpload from "@/components/admin/studentUpload";
import LabAdmin from "@/components/admin/labAdmin";
import ToolAdmin from "@/components/admin/toolAdmin";

const PaperSetup = (props) => {
  const [currentTab, setCurrentTab] = useState("student");
  const [ paper, setPaperData ]= useState(props.paper);

  return (
    <Layout>
      <StoreProvider>
        <div className="text-sm font-medium text-center border-b border-gray-200 text-cyan-950 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2" onClick={() => setCurrentTab("student")}>
              {currentTab == "student" ? (
                <div
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  aria-current="page">
                  Student List
                </div>
              ) : (
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Student List
                </a>
              )}
            </li>
            <li className="mr-2" onClick={() => setCurrentTab("labs")}>
              {currentTab == "labs" ? (
                <div
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  aria-current="page">
                  Labs
                </div>
              ) : (
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Labs
                </a>
              )}
            </li>
            <li className="mr-2" onClick={() => setCurrentTab("tool")}>
              {currentTab == "tool" ? (
                <div
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  aria-current="page">
                  Tool
                </div>
              ) : (
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Tool
                </a>
              )}
            </li>
          </ul>
        </div>

        {currentTab == "student" ? <StudentUpload students={props.paper.students} /> : <> {currentTab == "labs" ? <LabAdmin labs={props.paper.labs}/> : <ToolAdmin/>} </>}
      </StoreProvider>
      {paper && (
        <div>{paper.name}</div>)}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const path = "http://localhost:3000/api/v1";

  const res = await axios.get(`${path}/papers/1?timestamp=${Date.now()}`);
  const data = res.data.data;

  return {
    props: {
      paper: data
    },
  };
};

export default PaperSetup;
