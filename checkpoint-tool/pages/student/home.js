import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex p-6 justify-evenly gap-5 items-center w-full flex-col md:flex-row">
        <Link href="./checkpoint"
          className="w-96 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col-reverse">
          <div className="w-full p-6 dark:bg-gray-700">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Mark Checkpoint Complete</h2>
            <p className="text-gray-700 dark:text-gray-400">Mark a checkpoint as complete.</p>
          </div>
          <FontAwesomeIcon icon={faCheck} className="bg-repeat text-9xl mx-auto" />
        </Link>
        <Link href=""
          className="w-96 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col-reverse">
          <div className="w-full p-6 dark:bg-gray-700">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Completed Checkpoints</h2>
            <p className="text-gray-700 dark:text-gray-400">See checkpoints you have completed.</p>
          </div>
          <FontAwesomeIcon icon={faListCheck} className="bg-repeat text-9xl mx-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
