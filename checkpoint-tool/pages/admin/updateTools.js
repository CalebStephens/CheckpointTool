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

          </>
        )
        Object.keys(row.currentCategory).forEach(category => {
          const newId = `newCurrentCategory${category.toUpperCase()}`
          tools.push(
            <>
            <div className="flex space-x-6 pl-20">
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New Category Name {category.toUpperCase()}:</label>
              <input type="text" id={newId} className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.currentCategory[category]} required/>
          </div>
            </>
          )
        })

        Object.keys(row.labels).forEach(label => {
          console.log(Object.keys(row.labels[label]));
          Object.keys(row.labels[label]).forEach(coordinate => {
            const newId = `new${coordinate.charAt(0).toUpperCase() + coordinate.slice(1)}Label`
            console.log(label, coordinate)
            console.log(row.labels[label][coordinate])
            tools.push(
              <>
              <div className="flex space-x-6 pl-20">
                <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900 dark:text-black">New {coordinate.charAt(0).toUpperCase() + coordinate.slice(1)} Label:</label>
                <input type="text" id={newId} className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={row.labels[label][coordinate]} required/>
              </div>
              </>
            )
          })
      })
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
