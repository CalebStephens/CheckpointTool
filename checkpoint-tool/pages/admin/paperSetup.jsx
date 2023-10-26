import React, { useState } from "react";

import Layout from "@/components/admin/layout";
import StudentAdmin from "@/components/admin/studentAdmin";
import LabAdmin from "@/components/admin/labAdmin";
import ToolAdmin from "@/components/admin/toolAdmin";

import {get, post, put, del} from "@/utils/api";
import { useRouter } from "next/router";


const PaperSetup = (props) => {
  const [currentTab, setCurrentTab] = useState("student");
  const [paper, setPaperData] = useState(props.paper);

  const router = useRouter();

  return (
    <Layout>
      <>
      <div onClick={()=> router.push('../1/test')}>Test</div>
        <div className="text-sm font-medium text-center border-b border-gray-200 text-cyan-950">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2" onClick={() => setCurrentTab("student")}>
              {currentTab == "student" ? (
                <div
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300"
                  aria-current="page"
                >
                  Student List
                </div>
              ) : (
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                >
                  Student List
                </a>
              )}
            </li>
            <li className="mr-2" onClick={() => setCurrentTab("labs")}>
              {currentTab == "labs" ? (
                <div
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300"
                  aria-current="page"
                >
                  Labs
                </div>
              ) : (
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                >
                  Labs
                </a>
              )}
            </li>
            <li className="mr-2" onClick={() => setCurrentTab("tool")}>
              {currentTab == "tool" ? (
                <div
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300"
                  aria-current="page"
                >
                  Tool
                </div>
              ) : (
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                >
                  Tool
                </a>
              )}
            </li>
          </ul>
        </div>

        {currentTab == "student" ? (
          <StudentAdmin students={props.paper.students} />
        ) : (
          <> {currentTab == "labs" ? <LabAdmin labs={props.paper.labs} /> : <ToolAdmin tool={props.paper.tool} />} </>
        )}
      </>
    </Layout>
  );
};

export const getServerSideProps = async () => {

  const res = await get(`papers/1?timestamp=${Date.now()}`);
  const data = res.data.data;

  return {
    props: {
      paper: data,
    },
  };
};

export default PaperSetup;
