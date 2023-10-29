import Layout from "@/components/admin/layout";
import Login from "@/pages/admin/login";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/StoreContext";

export default function Index(props) {
  const { paper, setPaperData, clearContext } = useContext(StoreContext);

  // Add a state variable to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const setStore = () => {
      if (props.paperData) {
        clearContext();
        setPaperData(props.paperData);
      }
    };
    setStore();
  }, [props.paperData]);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Render login page if not logged in, otherwise render the layout page
  return isLoggedIn ? (
    <Layout>
      <div className="flex flex-col flex-1 w-full"></div>
    </Layout>
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export const getServerSideProps = async () => {
  const path = "http://localhost:3000/api/v1";
  const resTool = await axios.get(`${path}/papers/1?timestamp=${Date.now()}`);
  const data = resTool.data.data;
  return {
    props: {
      paperData: data,
    },
  };
};
