import React, { useState } from "react";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { get, post, put, del } from "@/utils/api";

const LabAdmin = (props) => {
  const [labList, setLabList] = useState(props.paper.labs);
  const [paper, setPaper] = useState(props.paper);
  const [addNewLab, setAddNewLab] = useState(false);
  const [bulkLabAmount, setBulkLabAmount] = useState(0);
  const [newLab, setNewLab] = useState({
    title: "",
    checkpoint: true,
  });
  console.log(labList, "labList");
  const saveNewLab = async (bulk) => {
    let sendToDB = [];
    if (bulk) {
      for (let i = 0; i < bulkLabAmount; i++) {
        let newLab = {
          title: `Lab ${i + 1}`,
          checkpoint: true,
          password: `${i + 1}5${(i+1)*5}`
        };
        sendToDB.push(newLab);
      }
    } else {
      sendToDB.push(newLab);
    }
    try {
      const res = await put(`papers/update/labs/${props.paper.id}`, sendToDB);
      if (res.status === 200) setLabList(res.data);
    } catch (err) {
      console.log(err);
    }
    setAddNewLab(false);
  };

  const deleteLab = async (labName) => {
    console.log(props.labs);
    try {
      const newLabList = labList.filter((lab) => lab.title !== labName);
      const res = await put(`papers/update/labs/${props.paper.id}`, newLabList);
      if (res.status === 200) setLabList(newLabList);
      console.log(newLabList);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAllLabs = async () => {
    try {
      const res = await put(`papers/update/labs/${props.paper.id}`, []);
      if (res.status === 200) setLabList([]);
    } catch (err) {
      console.log(err);
    }
  };

  const addUniqueLab = async () => {
    //check if newLab includes 'lab' in title
    if (!newLab.title.toLowerCase().includes("lab")) {
      // add 'lab' to title
      newLab.title = `Lab ${newLab.title}`;
    }
    //check if lab title already exists
    const labExists = labList.filter((lab) => lab.title.toLowerCase() === newLab.title.toLowerCase());
    if (labExists.length > 0) {
      return alert("Lab already exists");
    }

    newLab.password = `${labList.length + 1}5${(labList.length + 1) * 5}`;

    try {
      labList.push(newLab);
      const res = await put(`papers/update/labs/${props.paper.id}`, labList);
      if (res.status === 200) {
        setLabList(labList);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Lab Setup</h1>
      {labList.length === 0 && (
        <div className="flex items-center m-4 gap-2">
          <label htmlFor="extra-labs" className="text-sm font-bold text-gray-900">
            Bulk add:
          </label>
          <input
            type="number"
            onChange={(value) => setBulkLabAmount(value.target.value)}
            className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Amount of Labs..."
            value={bulkLabAmount}
            min={0}
            required
          />
          <button
            type="button"
            disabled={false}
            onClick={() => {
              bulkLabAmount > 0 ? saveNewLab(true) : null;
            }}
            className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Add Labs
          </button>
        </div>
      )}
      {labList.length > 0 ? (
        <div className="flex items-center space-x-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                <tr className="bg-white border-b" key={index}>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {d.title}
                  </td>
                  <td className="px-6 py-4">
                    {d.checkpoint ? <input type="checkbox" defaultChecked={d.checkpoint} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus-ring-blue-500" /> : null}
                  </td>
                  <td className="px-6 py-4" onClick={() => deleteLab(d.title)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              ))}
              {addNewLab && (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      onChange={(value) => setNewLab({ ...newLab, title: value.target.value })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Lab Name..."
                      required
                    />
                  </td>
                  {/* <td className="px-6 py-4">
                    <input
                      type="password"
                      onChange={(value) => setNewLab({ ...newLab, password: value.target.value })}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Lab Password..."
                      required
                    />
                  </td> */}
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      onChange={(value) => setNewLab({ ...newLab, checkpoint: value.target.checked })}
                      defaultChecked="true"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus-ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-red-600">
                    <button onClick={() => addUniqueLab()} type="button" className="text-white bg-green-700 hover-bg-green-800 focus-ring-4 focus-ring-green-300 font-medium rounded-lg text-sm p-2">
                      Save
                    </button>
                  </td>
                </tr>
              )}
              <tr className="bg-white border-b">
                <td className="px-6 py-4">
                  <button
                    type="button"
                    onClick={() => setAddNewLab(!addNewLab)}
                    className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Add Lab
                  </button>
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-red-600">
                  <button
                    type="button"
                    onClick={() => deleteAllLabs()}
                    className="focus-outline-none text-white bg-red-700 hover-bg-red-800 focus-ring-4 focus-ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Delete All
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>No labs in this list</div>
      )}
    </>
  );
};

export default LabAdmin;
