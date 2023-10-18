import React from 'react'
import axios from "axios";
import toolsImage from "@/images/ToolsExample.png"
import Layout from '@/components/admin/layout'
import { Input } from 'postcss';
import Image from 'next/image'

const UpdateTools = (props) => {

    const questions = props.tools[0].questions;

    //https://flowbite.com/docs/forms/input-field/

    const renderTools = () => {
      const tools = [];
      questions.forEach((row, count) => {
        console.log(row)
        tools.push(
          <>
          <h2 className="font-bold pl-12">Tool {count + 1}: Labels & Category</h2>
          
          <div className="pl-20">
          <div className="grid grid-cols-2">
            <div className="flex space-x-6">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">Current Category Name X:</label>
              <input type="text" id="currentCategoryX" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.currentCategory.x} disabled/>
          </div>
            <div className="flex space-x-6">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New Category Name X:</label>
              <input type="text" id="newCurrentCategoryX" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.currentCategory.x} required/>
            </div>
          </div>

          <div className="grid grid-cols-2">
          <div className="flex space-x-6">
          <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">Current Category Name Y:</label>
          <input type="text" id="currentCategoryY" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.currentCategory.y} disabled/>
          </div>
          <div className="flex space-x-6">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New Category Name Y:</label>
              <input type="text" id="newCurrentCategoryY" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.currentCategory.y} required/>
            </div>
          </div>

          <div className="grid grid-cols-2">
          <div className="flex space-x-6">
          <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">Current North Label:</label>
          <input type="text" id="currentNorthLabel" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.y.top} disabled/>
          </div>
          <div className="flex space-x-6">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New North Label:</label>
              <input type="text" id="newNorthLabel" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.labels.y.top} required/>
            </div>
          </div>

          <div className="grid grid-cols-2">
          <div className="flex space-x-6">
          <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">Current South Label:</label>
          <input type="text" id="currentSouthLabel" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.y.bottom} disabled/>
          </div>
          <div className="flex space-x-6">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New South Label:</label>
              <input type="text" id="newSouthLabel" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.labels.y.bottom} required/>
            </div>
          </div>

          <div className="grid grid-cols-2">
          <div className="flex space-x-6">
          <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">Current East Label:</label>
          <input type="text" id="currentEastLabel" className="w-80 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.x.right} disabled/>
          </div>
          <div className="flex space-x-6">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New East Label:</label>
              <input type="text" id="newEastLabel" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.labels.x.right} required/>
            </div>
          </div>

          <div className="grid grid-cols-2">
          <div className="flex space-x-6">
          <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">Current West Label:</label>
          <input type="text" id="currentWestLabel" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.x.left} disabled/>
          </div>
          <div className="flex space-x-6">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New West Label:</label>
              <input type="text" id="newWestLabel" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.labels.x.left} required/>
            </div>
          </div>
          </div>

          </>
        )
      })
      return tools;
    }


  return (
        <Layout>
            <h1 className="font-bold text-4xl pb-8 flex items-center justify-center">Update Tool Labels</h1>
            <Image className="m-auto"src={toolsImage}/>
            {renderTools()}
            <div className="flex flex-col items-center pr-20"> 
            <button type="button" className="text-white flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
            </div>
        </Layout>
  )
}

export const getServerSideProps = async () => {
    const path = "http://localhost:3000/api/v1";
    const resTool = await axios.get(`${path}/tools`);
    const tools = resTool.data.data;
    return {
      props: {
        tools,
      },
    };
  };

export default UpdateTools;
