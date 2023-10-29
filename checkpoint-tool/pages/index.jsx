import Layout from "@/components/admin/layout";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/StoreContext";

export default function Index(props) {
  const [loading, setLoading] = useState(false);
  const { paper, setPaperData, clearContext } = useContext(StoreContext);

  useEffect(() => {
    const setStore = () => {
      if (props.paperData) {
        clearContext()
        setPaperData(props.paperData);
      }
    };
    setStore();
  }, [props.paperData]);

  return (
    <Layout>
      <div className="flex flex-col flex-1 w-full"></div>
    </Layout>
  );
}

// export const getServerSideProps = async () => {
//   // const resTool = await get(`papers/1?timestamp=${Date.now()}`);
//   // const data = resTool.data.data;
//   // return {
//   //   props: {
//   //     paperData: data,
//   //   },
//   // };
// };