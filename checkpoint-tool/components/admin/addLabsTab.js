
const addLabs = () => {
    return (
      <>

<div className="p-10 flex flex-col justify-center">
        <h1 className="text-6xl m-auto pb-5">Add Semester Labs</h1>

        <h4 className="bg-blue-400 rounded p-4">
          Tip: You can manually enter the lab in the "Extra Lab" field or add
          additional labs throughout the semester
        </h4>

        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <label
              htmlFor="amount-of-labs"
              className="w-40 text-sm font-bold text-gray-900 dark:text-white"
            >
              Amount of Labs:
            </label>
            <input
              type="text"
              id="amount-of-labs"
              placeholder="Enter number of labs"
              className="flex p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-24 text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <label
              htmlFor="extra-labs"
              className="w-40 text-sm font-bold text-gray-900 dark:text-white"
            >
              Extra Labs:
            </label>
            <input
              type="text"
              id="extra-labs"
              placeholder="Enter extra lab name or number"
              className="flex p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-24 text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default addLabs;