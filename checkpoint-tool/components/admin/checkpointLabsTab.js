const checkPointLabsTab = () => {
  const data = [
    { checkpoint: true, labName: 1 },
    { checkpoint: true, labName: 2 },
    { checkpoint: true, labName: 3 },
    { checkpoint: false, labName: 4 },
    { checkpoint: true, labName: 5 },
    { checkpoint: true, labName: 6 },
    { checkpoint: true, labName: 7 },
    { checkpoint: false, labName: 8 },
    { checkpoint: true, labName: 9 },
    { checkpoint: true, labName: 10 },
  ];

  const processedData = () => {
    const checkPointLabs = [];
    const nonCheckPointLabs = [];
    data.forEach((entry) => {
      if (entry.checkpoint == true) {
        checkPointLabs.push(
          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-800 focus:ring-2"
                />
              </th>
              <td className="px-6 py-4">{entry.labName}</td>
            </tr>
          </tbody>
        );
      } else {
        nonCheckPointLabs.push(
          <tbody>
            <tr className="bg-white border-b bg-gray-800 border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-800 focus:ring-2"
                />
              </th>
              <td className="px-6 py-4">{entry.labName}</td>
            </tr>
          </tbody>
        );
      }
    });
    return { checkPointLabs, nonCheckPointLabs };
  };

  const { checkPointLabs, nonCheckPointLabs } = processedData();

  return (
    <>
      <h1 className="flex text-5xl justify-center font-extrabold">Checkpoint Lab Section</h1>

      <div className="relative overflow-x-auto pb-16">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lab ID
              </th>
              <th scope="col" className="px-6 py-3">
                Lab Name
              </th>
            </tr>
          </thead>
          {checkPointLabs}
        </table>
        <button
          type="button"
          className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover-bg-blue-700 focus:outline-none focus:ring-blue-800">
          Remove Checkpoint
        </button>
      </div>

      <h1 className="flex text-5xl justify-center font-extrabold">Non Checkpoint Labs</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lab ID
              </th>
              <th scope="col" className="px-6 py-3">
                Lab Name
              </th>
            </tr>
          </thead>
          {nonCheckPointLabs}
        </table>
        <button
          type="button"
          className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover-bg-blue-700 focus:outline-none focus:ring-blue-800">
          Add Checkpoint
        </button>
      </div>
    </>
  );
};

export default checkPointLabsTab;
