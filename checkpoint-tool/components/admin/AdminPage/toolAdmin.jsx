import React from 'react';
import toolsImage from '@/images/ToolsExample.png';
import Layout from '@/components/admin/layout';
import { Input } from 'postcss';
import Image from 'next/image';
import {useState} from 'react';
import {get, del, put, post } from '@/utils/api'

const ToolAdmin = (props) => {

  const [tool, setTool] = useState(props.tool);

  const questions = props.tool.questions;

  const updateTool = async () => {
    const putRequest = await put("tools/1", tool);

  } 

  const renderTools = () => {
    const tools = [];
    questions.forEach((row, count) => {
      tools.push(
        <h2 className="font-bold pl-12">Tool {count + 1}: Labels & Category</h2>
      );


      Object.keys(row.currentCategory).forEach((category) => {
        const newId = `newCurrentCategory${category.toUpperCase()}`;
        tools.push(
          <div className="flex space-x-6 pl-20">
            <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900">
              New Category Name {category.toUpperCase()}:
            </label>
            <input
              type="text"
              id={newId}
              className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              // value={row.currentCategory[category]}
              //chat gpt
              placeholder={row.currentCategory[category]}
              onChange={(event) => {
                const { value } = event.target;
                const updatedQuestions = tool.questions.map((question, index) => {
                  if (index === count) { // Check if it's the current question
                    return {
                      ...question,
                      currentCategory: {
                        ...question.currentCategory,
                        [category]: value,
                      },
                    };
                  }
                  return question; // For other questions, return as is
                });
              
                const updatedTool = { ...tool, questions: updatedQuestions };
                setTool(updatedTool);
              }}
              
              
              required
            />
          </div>
        );
      });

      Object.keys(row.labels).forEach((axis) => {
        Object.keys(row.labels[axis]).forEach((coordinate) => {
          const newId = `new${coordinate.charAt(0).toUpperCase() + coordinate.slice(1)}Label`;
      
          tools.push(
            <div className="flex space-x-6 pl-20" key={newId}>
              <label className="block w-44 mb-2 text-sm font-medium pt-2 text-gray-900">
                {`New ${coordinate.charAt(0).toUpperCase() + coordinate.slice(1)} Label:`}
              </label>
              <input
                type="text"
                id={newId}
                className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={row.labels[axis][coordinate]}
                onChange={(event) => {
                  const { value } = event.target;
                  const updatedLabels = {
                    ...row.labels,
                    [axis]: {
                      ...row.labels[axis],
                      [coordinate]: value,
                    },
                  };
                  const updatedQuestions = [...questions]; // Copy the original questions array
                  updatedQuestions[count] = {
                    ...updatedQuestions[count],
                    labels: updatedLabels,
                  };
      
                  // Create a new tool object with the updated questions
                  const updatedTool = { ...tool, questions: updatedQuestions };
                  // Set the updated tool state
                  setTool(updatedTool);
                }}
                required
              />
            </div>
          );
        });
      });
      
});

    return tools;
  };

  return (
    <>
      <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Update Tool Labels</h1>
      <Image className="m-auto" src={toolsImage} />
      {renderTools()}
      <div className="flex flex-col items-center pr-20 pt-4">
        <button
          onClick = {() => updateTool()}
          type="button"
          className="text-white flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Update
        </button>
      </div>
    </>
  );
};

export default ToolAdmin;
