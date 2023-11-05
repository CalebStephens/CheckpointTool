import React, { useState } from "react";
import ScatterGraph from "@/components/admin/ScatterGraph";
import { get } from "@/utils/api";
import Layout from "@/components/admin/layout";

const Graphs = (props) => {
  const [selectedLab, setSelectedLab] = useState(null);

  const handlePaperSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedLab(selectedValue);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-semibold mb-4">Graphs</h1>

        <div className="w-full max-w-md mb-4">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            onChange={handlePaperSelect}
          >
            <option value="">Select a Lab</option>
            {props.paper.labs.map((lab, index) => (
              <option key={index} value={lab.title}>
                {lab.title}
              </option>
            ))}
          </select>
        </div>

        {selectedLab && (
          <ScatterGraph
            students={props.paper.students}
            tool={props.paper.tool}
            labName={selectedLab}
          />
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await get(`papers/1?timestamp=${Date.now()}`);
  const data = res.data.data;

  return {
    props: {
      paper: data,
    },
  };
};

export default Graphs;
