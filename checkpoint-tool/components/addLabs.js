
const addLabs = () => {


    return(
        <>
        <div class="p-7 flex flex-col justify-center">
        <h1 class="text-6xl">Add Semester Labs</h1>
        <h4>Tip: You can manually enter the lab in the "Extra Lab" field or add additional lab through out the semester</h4>
        <div class="justify-center flex flex-col">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount of Labs:</label>
        <input type="text" id="small-input" placeholder="Enter number of labs" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>

        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Extra Labs:</label>
        <input type="text" id="small-input" placeholder="Enter extra lab name or number" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        </div>
        </>
    )
};

export default addLabs;
