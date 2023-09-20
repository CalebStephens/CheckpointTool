import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const HomeLink = (props) => {
  return (
    <Link href={props.link}
          className="md:w-96 md:h-80 h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col-reverse overflow-hidden">
          <div className="w-full p-6 dark:bg-gray-700 ">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h2>
            <p className="text-gray-700 dark:text-gray-400">{props.desc}</p>
          </div>
          <FontAwesomeIcon icon={props.icon} className="bg-repeat text-9xl mx-auto" />
        </Link>
  )
}

export default HomeLink
