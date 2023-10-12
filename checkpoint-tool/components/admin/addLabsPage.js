import AddLabsTab from "./addLabsTab.js";
import CheckPointLabsTab from "./checkpointLabsTab.js";
import DeleteLab from "./deleteLab.js";
import { useState } from "react";

const addLabs = () => {
  const [currentTab, setCurrentTab] = useState("Labs");

  return (
    <>
      <div className="text-sm font-medium text-center text-white border-b border-gray-200 dark:text-white dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2" onClick={() => setCurrentTab("Labs")}>
            {currentTab == "Labs" ? (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                aria-current="page">
                Add Labs
              </a>
            ) : (
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                {" "}
                Add Labs
              </a>
            )}
          </li>
          <li className="mr-2" onClick={() => setCurrentTab("Checkpoint")}>
            {currentTab == "Checkpoint" ? (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                aria-current="page">
                Checkpoints
              </a>
            ) : (
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                {" "}
                Checkpoints
              </a>
            )}
          </li>
          <li className="mr-2" onClick={() => setCurrentTab("Delete")}>
            {currentTab == "Delete" ? (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                aria-current="page">
                Delete
              </a>
            ) : (
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                {" "}
                Delete
              </a>
            )}
          </li>
        </ul>
      </div>

      {currentTab == "Labs" ? <AddLabsTab /> : <> {currentTab == "Checkpoint" ? <CheckPointLabsTab /> : <DeleteLab />} </>}
    </>
  );
};

export default addLabs;
