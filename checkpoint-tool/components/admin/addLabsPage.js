import AddLabsTab from "./addLabsTab.js"
import CheckPointLabsTab from "./checkpointLabsTab.js"
import DeleteLab from "./deleteLab.js"
import {useState} from 'react';

const addLabs = () => {
  
  const [currentTab, setCurrentTab] = useState("Labs");
  

  
  return (
    <>
    <div class="text-sm font-medium text-center text-white border-b border-gray-200 dark:text-white dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px" >
            <li class="mr-2" onClick={() => setCurrentTab("Labs")} >
                <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Add Labs</a>
            </li>
            <li class="mr-2" onClick={() => setCurrentTab("Checkpoint")}>
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Checkpoints</a>
            </li>
            <li class="mr-2" onClick={() => setCurrentTab("Delete")}>
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Delete</a>
            </li>
        </ul>
    </div>
    
    {currentTab == "Labs" ? <AddLabsTab/> : <> {currentTab == "Checkpoint" ? <CheckPointLabsTab/> : <DeleteLab/>} </>}

    </>
  );
};

export default addLabs;
