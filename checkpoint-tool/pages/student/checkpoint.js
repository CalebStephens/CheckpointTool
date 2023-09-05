import Link from "next/link";
import React from "react";

const Checkpoint = () => {
  return (
    <div className="p-6">
      <form>
        <div className="mb-6">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Student Name:
          </label>
          <select
            id="student"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a Student</option>
            <option value="jim-bob">Jim Bob</option>
            <option value="bobby-bobbinson">Bobby Bobbinson</option>
            <option value="marko-coen">Marko Coen</option>
          </select>
        </div>
        <div className="mb-6 flex flex-row gap-6 w-full">
          <div className="w-1/2">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lab Number:
            </label>
            <select
              id="lab"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a Lab</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="w-1/2">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lab Password:
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        
        <Link
          type="submit"
          href="./labDescribe"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Mark Complete
        </Link>
      </form>
    </div>
  );
};

export default Checkpoint;
