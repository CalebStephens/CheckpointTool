// File: LabsCompletedPage.jsx
// Description: This file defines the LabsCompletedPage component, which displays a list of labs completed by students.

import { get } from "@/utils/api";
import LabsCompleted from "../../components/admin/LabsCompletedPage/LabsCompleted";
import Layout from "../../components/admin/layout";

// LabsCompletedPage component
const LabsCompletedPage = (props) => {
  return (
    <Layout>
      <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Labs Completed</h1>
      <LabsCompleted students={props.paper.students} labs={props.paper.labs} />
    </Layout>
  );
};

// Server-side props retrieval function
export const getServerSideProps = async () => {
  const res = await get(`papers/1?timestamp=${Date.now()}`);
  const data = res.data.data;

  return {
    props: {
      paper: data,
    },
  };
};

export default LabsCompletedPage;
