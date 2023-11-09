// File: DangerZonePage.jsx
// Description: This file defines the DangerZonePage component, which allows administrators to manage
// students who show signs of struggling

import DangerZone from "@/components/admin/DangerZonePage/DangerZone";
import Layout from "@/components/admin/layout";
import { get } from "@/utils/api";

// DangerZonePage component
const DangerZonePage = (props) => {
  return (
    <Layout>
      <DangerZone students={props} />
    </Layout>
  );
};

// Server-side props retrieval function
export const getServerSideProps = async (context) => {
  // If authentication is successful, proceed to fetch data
  const res = await get(`students?timestamp=${Date.now()}`);
  const data = res.data;

  return {
    props: {
      data: data,
    },
  };
};

export default DangerZonePage;
