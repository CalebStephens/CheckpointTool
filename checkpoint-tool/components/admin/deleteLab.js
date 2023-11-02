const deleteLab = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, "Caleb", "One"
  ];

  const processedData = () => {
    const tableRows = [];
    data.forEach((entry) => {
      tableRows.push(
        <tbody>
          <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
              />
            </th>
            <td className="px-6 py-4">Lab {entry}</td>
          </tr>
        </tbody>
      );
    });
    return tableRows;
  };

  return (
    <>
      <h1 className="flex justify-center text-5xl font-extrabold">Delete Labs</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lab ID
              </th>
              <th scope="col" className="px-6 py-3">
                Lab Name
              </th>
            </tr>
          </thead>
          {processedData()}
        </table>
      </div>

      <button
        type="button"
        className="flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
        Red
      </button>
    </>
  );
};

export default deleteLab;
