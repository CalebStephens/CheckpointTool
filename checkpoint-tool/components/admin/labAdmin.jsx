import React, { useEffect, useState } from "react";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LabAdmin = (props) => {
  const [labList, setLabList] = useState(props.labs);
  const [addNewLab, setAddNewLab] = useState(false);

  return (
    <>
      <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Lab Setup</h1>
      {labList.length > 0 ? (
        <div className="flex items-center space-x-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Lab Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Checkpoint
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {labList.map((d, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {d.title}
                  </td>
                  <td className="px-6 py-4">
                    {d.checkpoint ? (
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        defaultChecked={d.checkpoint}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    ) : null}
                  </td>
                  <td className="px-6 py-4">
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              ))}
              {addNewLab && (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                  <input type="search" id="default-search" className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lab Name..." required />
                  </td>
                  <td className="px-6 py-4">
                  <input
                        id="default-checkbox"
                        type="checkbox"
                        defaultChecked="true"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                  </td>
                  <td className="px-6 py-4 text-red-600">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Save
                  </button>
                  </td>
                </tr>
              )}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Update
                  </button>
                </td>
                <td className="px-6 py-4 w-28">
                  <button
                    type="button"
                    onClick={() => setAddNewLab(!addNewLab)}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add Lab
                  </button>
                </td>
                <td className="px-6 py-4 text-red-600">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete All
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      ) : (
        <div>No students in this list</div>
      )}
    </>
  );
};

export default LabAdmin;
