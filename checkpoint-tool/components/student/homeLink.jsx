// Desc: This component is used to create a link to a page on the student home page

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HomeLink = (props) => {
  return (
    <Link href={props.link} className="md:w-96 md:h-80 h-72 bg-white border border-gray-200 rounded-lg shadow flex flex-col-reverse overflow-hidden">
      <div className="w-full p-6">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{props.title}</h2>
        <p className="text-gray-700">{props.desc}</p>
      </div>
      <FontAwesomeIcon icon={props.icon} className="bg-repeat text-9xl mx-auto" />
    </Link>
  );
};

export default HomeLink;
