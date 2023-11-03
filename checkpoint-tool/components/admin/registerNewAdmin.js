import React, { useState, useEffect } from 'react';
import Layout from '@/components/admin/layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { get, del, post } from '@/utils/api';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const registerNewAdmin = (props) => {
  const [adminList, setAdminList] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: '', password: '' });
  const [addNewAdmin, setAddNewAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the admin list from the API when the component mounts
    const fetchAdminList = async () => {
      try {
        const res = await get('users');
        if (res.status === 200) {
          setAdminList(res.data);
          setLoading(false); // Set loading to false after data is fetched
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchAdminList();
  }, []);

  const saveNewAdmin = async () => {
    try {
      const res = await post('register', newAdmin);
      if (res.status === 200) {
        setAdminList([...adminList, res.data]);
        setNewAdmin({ username: '', password: '' }); // Clear the input fields
      }
    } catch (err) {
      console.error(err);
    }
    setAddNewAdmin(false);
  };

  const deleteAdmin = async (adminId) => {
    try {
      const res = await del(`admins/${adminId}`);
      if (res.status === 200) {
        setAdminList(adminList.filter(admin => admin.id !== adminId));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Register New Admin</h1>
          {adminList.data.length > 0 ? (
            <div className="flex items-center space-x-4">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {adminList.data.map(admin => (
                    <tr className="bg-white border-b" key={admin.id}>
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {admin.username}
                      </td>
                      <td className="px-6 py-4" onClick={() => deleteAdmin(admin.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                  ))}
                  {addNewAdmin && (
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
                          value={newAdmin.username}
                          className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="New Username..."
                          required
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="password"
                          onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                          value={newAdmin.password}
                          className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Password..."
                          required
                        />
                      </td>
                      <td className="px-6 py-4 text-red-600">
                        <button onClick={saveNewAdmin} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2">
                          Save
                        </button>
                      </td>
                    </tr>
                  )}
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => setAddNewAdmin(!addNewAdmin)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                      >
                        Add Admin
                      </button>
                    </td>
                    <td className="px-6 py-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div>No admins in this list</div>
          )}
        </>
      )}
    </>
  );
};

export default registerNewAdmin;
