import AddLabsTab from "./addLabsTab.js"
import CheckPointLabsTab from "./checkpointLabsTab.js"

const addLabs = () => {
  
  
  
  
  return (
    <>
    <div class="text-sm font-medium text-center text-white border-b border-gray-200 dark:text-white dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
            <li class="mr-2">
                <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Add Labs</a>
            </li>
            <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
            </li>
            <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
            </li>
        </ul>
    </div>



    <CheckPointLabsTab/>
    </>
  );
};

export default addLabs;
