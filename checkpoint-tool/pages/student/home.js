import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import HomeLink from "@/components/student/homeLink.jsx";
import Layout from "@/components/student/layout.jsx";

const Home = () => {
  return (
    <Layout>
      <div className="w-screen h-screen">
        <div className="flex p-6 pt-20 justify-evenly gap-5 items-center w-full h-full flex-col md:flex-row">
          <HomeLink link="./checkpoint" title="Mark Checkpoint Complete" desc="Mark a checkpoint as complete." icon={faCheck} />
          <HomeLink link="./completedCheckpoints" title="Completed Checkpoints" desc="See checkpoints you have completed." icon={faListCheck} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
