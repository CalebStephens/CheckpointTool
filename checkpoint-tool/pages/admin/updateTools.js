import React from 'react'
import axios from "axios";
import toolsImage from "@/images/ToolsExample.png"
import Layout from '@/components/admin/layout'
import { Input } from 'postcss';

const UpdateTools = (props) => {

    const questions = props.tools[0].questions;

    //https://flowbite.com/docs/forms/input-field/

    const renderTools = () => {
      const tools = [];
      questions.forEach(row => {
        console.log(row.labels.x.left)
        tools.push(
          <>
          <h2>Tool 1: Labels & Category</h2>
          <div class="grid grid-cols-2 gap-2">
          <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current North Label</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
          
          </div>

          </div>
          </>
        )
      })
      return tools;
    }


  return (
        <Layout>
            <h1>Update Tool Labels</h1>
            <img src={toolsImage}></img>
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
