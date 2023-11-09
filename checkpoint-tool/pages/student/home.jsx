// File: Home.jsx
// Description: This file defines the Home component for the student dashboard.

import React from "react";
import { faCheck, faListCheck } from "@fortawesome/free-solid-svg-icons";

import HomeLink from "@/components/student/homeLink.jsx";
import Layout from "@/components/student/layout.jsx";

// Home component
const Home = () => {
  return (
    <Layout>
      <div className="w-screen h-screen">
        <div className="flex p-6 pt-20 justify-evenly gap-5 items-center w-full h-full flex-col md:flex-row">
          {/* Render a HomeLink component for marking checkpoints as complete */}
          <HomeLink link="./checkpoint" title="Mark Checkpoint Complete" desc="Mark a checkpoint as complete." icon={faCheck} />
          {/* Render a HomeLink component for displaying completed checkpoints */}
          <HomeLink link="./completedCheckpoints" title="Completed Checkpoints" desc="See checkpoints you have completed." icon={faListCheck} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
