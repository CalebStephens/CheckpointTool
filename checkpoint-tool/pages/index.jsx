import Layout from "@/components/admin/layout";
import Login from "@/pages/admin/login";
import React, { useState } from "react";
import { useRouter } from "next/router";


export default function Index(props) {
  // Add a state variable to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
    router.push("/admin/labsCompletedPage");
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
