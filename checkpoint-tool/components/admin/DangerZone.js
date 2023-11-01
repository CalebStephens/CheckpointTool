import React, { useState } from "react";
import {get, del, put, post } from '@/utils/api'


const DangerZone = (props) => {

  console.log(props.students.data.data)
  const hardVBoring = [
    {
      "Lab ID": "L001",
      "Student Username": "user123",
      "X Value": 10,
      "Y Value": 15,
    },
    {
      "Lab ID": "L002",
      "Student Username": "student456",
      "X Value": 8,
      "Y Value": 20,
    },
    {
      "Lab ID": "L003",
      "Student Username": "studious_student",
      "X Value": 12,
      "Y Value": 25,
    },
    {
      "Lab ID": "L004",
      "Student Username": "experiment_guru",
      "X Value": 5,
      "Y Value": 30,
    },
    {
      "Lab ID": "L005",
      "Student Username": "sciencelover77",
      "X Value": 15,
      "Y Value": 18,
    },
  ];
  const [hardvsBoring, setHardVBoring] = useState(true);
  const [startedvscontent, setStartedvscontent] = useState(true);
  const [frustratedvsskills, setFrustratedvsSkills] = useState(true);


  const renderHardTable = () => {
    const hardTable = [];
    hardVBoring.forEach((row) => {
      hardTable.push(
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-2 py-2">{row["Lab ID"]}</td>
          <td className="px-2 py-2">{row["Student Username"]}</td>
          <td className="px-2 py-2">{row["X Value"]}</td>
          <td className="px-2 py-2">{row["Y Value"]}</td>
        </tr>
      );
    });
    return hardTable;
  };

  const toggleHardTable = () => {
    setHardVBoring(!hardvsBoring);
  };
  const toggleStartedvsContent = () => {
    setStartedvscontent(!startedvscontent);
  };
  const toggleFrustratedvsContent = () => {
    setFrustratedvsSkills(!frustratedvsskills);
  };

  return (
    <>
      <h1>Report on Students that are Struggling</h1>
      <h2>Hard VS Boring</h2>
      <table className="text-sm text-center text-gray-500">
        <thead className="text-xs uppercase bg-gray-50" onClick={toggleHardTable}>
          <tr>
            <th className="px-6 py-3">Lab ID</th>
            <th className="px-6 py-3">Student Username</th>
            <th className="px-6 py-3">X Value</th>
            <th className="px-6 py-3">Y Value</th>
          </tr>
        </thead>
        <tbody>{hardvsBoring ? renderHardTable() : null}</tbody>
      </table>

      <h2>I needed help to get started vs content was all new</h2>
      <table className="text-sm text-center text-gray-500">
        <thead className="text-xs uppercase bg-gray-50" onClick={toggleStartedvsContent}>
          <tr>
            <th className="px-6 py-3">Lab ID</th>
            <th className="px-6 py-3">Student Username</th>
            <th className="px-6 py-3">X Value</th>
            <th className="px-6 py-3">Y Value</th>
          </tr>
        </thead>
        <tbody>{startedvscontent ? renderHardTable() : null}</tbody>
      </table>

      <h2>I feel frustrated VS my programming skills have improved</h2>
      <table className="text-sm text-center text-gray-500">
        <thead className="text-xs uppercase bg-gray-50" onClick={toggleFrustratedvsContent}>
          <tr>
            <th className="px-6 py-3">Lab ID</th>
            <th className="px-6 py-3">Student Username</th>
            <th className="px-6 py-3">X Value</th>
            <th className="px-6 py-3">Y Value</th>
          </tr>
        </thead>
        <tbody>{frustratedvsskills ? renderHardTable() : null}</tbody>
      </table>
    </>
  );
};



export default DangerZone;
