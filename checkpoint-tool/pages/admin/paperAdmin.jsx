// File: PaperSetup.jsx
// Description: This file defines the PaperSetup component for the admin dashboard, 
// which allows administrators to manage students, labs, tools, and register new admins.

import React, { useState } from "react";

import Layout from "@/components/admin/layout";
import StudentAdmin from "@/components/admin/AdminPage/studentAdmin";
import LabAdmin from "@/components/admin/AdminPage/labAdmin";
import ToolAdmin from "@/components/admin/AdminPage/toolAdmin";
import RegisterNewAdmin from "@/components/admin/AdminPage/registerNewAdmin";

import { get } from "@/utils/api";

// PaperSetup component
const PaperSetup = (props) => {
  const [currentTab, setCurrentTab] = useState("student");

  return (
    <Layout>
      <>
        <div className="text-sm font-medium text-center border-b border-gray-200 text-cyan-950">
          <ul className="flex flex-wrap -mb-px">
            {/* Tab selection for managing students */}
            <li className="mr-2" onClick={() => setCurrentTab("student")}>
              {currentTab === "student" ? (
                <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300" aria-current="page">
                  Student List
                </div>
              ) : (
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                  Student List
                </a>
              )}
            </li>
            {/* Tab selection for managing labs */}
            <li className="mr-2" onClick={() => setCurrentTab("labs")}>
              {currentTab === "labs" ? (
                <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300" aria-current="page">
                  Labs
                </div>
              ) : (
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                  Labs
                </a>
              )}
            </li>
            {/* Tab selection for managing tools */}
            <li className="mr-2" onClick={() => setCurrentTab("tool")}>
              {currentTab === "tool" ? (
                <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300" aria-current="page">
                  Tool
                </div>
              ) : (
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                  Tool
                </a>
              )}
            </li>
            {/* Tab selection for registering new admins */}
            <li className="mr-2" onClick={() => setCurrentTab("registerNewAdmin")}>
              {currentTab === "registerNewAdmin" ? (
                <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300" aria-current="page">
                  Register New Admin
                </div>
              ) : (
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                  Register New Admin
                </a>
              )}
            </li>
          </ul>
        </div>

        <>
          {currentTab === "student" ? (
            <StudentAdmin students={props.paper.students} />
          ) : currentTab === "labs" ? (
            <LabAdmin paper={props.paper} />
          ) : currentTab === "tool" ? (
            <ToolAdmin tool={props.paper.tool} />
          ) : (
            <RegisterNewAdmin users={props.users} />
          )}
        </>
      </>
    </Layout>
  );
};

// Server-side props fetching
export const getServerSideProps = async () => {
  const res = await get(`papers/1?timestamp=${Date.now()}`);
  const data = res.data.data;
  const resAdminData = await get(`users`);
  const adminData = resAdminData.data.data;

  return {
    props: {
      paper: data,
      users: adminData,
    },
  };
};

export default PaperSetup;
