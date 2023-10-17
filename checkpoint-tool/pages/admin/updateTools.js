import React from 'react'
import axios from "axios";
import toolsImage from "@/images/ToolsExample.png"
import Layout from '@/components/admin/layout'
import { Input } from 'postcss';
import Image from 'next/image'

const UpdateTools = (props) => {

    const questions = props.tools[0].questions;
    console.log(toolsImage)

    //https://flowbite.com/docs/forms/input-field/

    const renderTools = () => {
      const tools = [];
      questions.forEach((row, count) => {
        console.log(row.labels)
        tools.push(
          <>
          <h2>Tool {count + 1}: Labels & Category</h2>
          <div class="grid grid-cols-2 gap-2">
          <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Category Name X:</label>
          <input type="text" id="currentCategoryX" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Difficulty" required/>
          
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Category Name Y:</label>
          <input type="text" id="currentCategoryY" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Interest" required/>
          
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current North Label:</label>
          <input type="text" id="currentNorthLabel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.y.top} required/>
          
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current South Label:</label>
          <input type="text" id="currentSouthLabel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.y.bottom} required/>
          
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current East Label:</label>
          <input type="text" id="currentEastLabel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.x.right} required/>
          
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current West Label:</label>
          <input type="text" id="currentWestLabel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={row.labels.x.left} required/>
          </div>

          </div>
          </>
        )
      })
      return tools;
    }


  return (
        <Layout>
            <h1 class="flex">Update Tool Labels</h1>
            <Image src={toolsImage}/>
            {renderTools()}
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
