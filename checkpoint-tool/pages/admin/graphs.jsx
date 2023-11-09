import { useState } from "react";
import Layout from "../../components/admin/layout";
// import StudentScatterGraph from "../../components/admin/StudentScatterGraph";
// import LabProgressionGraph from "../../components/admin/LabProgressionGraph";
import { get } from "@/utils/api";
import ScatterGraphParent from "@/components/admin/GraphsPage/ScatterGraphParent";
import LineGraphParent from "@/components/admin/GraphsPage/LineGraphParent";

const LabsCompletedPage = (props) => {
  const [currentTab, setCurrentTab] = useState("labScatter");

  return (
    <Layout>
      <h1 className="text-4xl m-4 font-extrabold text-cyan-950">Graphs</h1>
      <div className="text-sm font-medium text-center border-b border-gray-200 text-cyan-950">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2" onClick={() => setCurrentTab("labScatter")}>
            {currentTab === "labScatter" ? (
              <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300" aria-current="page">
                Lab Scatter
              </div>
            ) : (
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                Lab Scatter
              </a>
            )}
          </li>
          <li className="mr-2" onClick={() => setCurrentTab("studentScatter")}>
            {currentTab === "studentScatter" ? (
              <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover:text-gray-600 hover:border-gray-300" aria-current="page">
                Student Scatter
              </div>
            ) : (
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover-text-gray-600 hover:border-gray-300">
                Student Scatter
              </a>
            )}
          </li>
          <li className="mr-2" onClick={() => setCurrentTab("labProgression")}>
            {currentTab === "labProgression" ? (
              <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover-text-gray-600 hover:border-gray-300" aria-current="page">
                Lab Progression
              </div>
            ) : (
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover-text-gray-600 hover:border-gray-300">
                Lab Progression
              </a>
            )}
          </li>
          <li className="mr-2" onClick={() => setCurrentTab("studentProgression")}>
            {currentTab === "studentProgression" ? (
              <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active hover-text-gray-600 hover:border-gray-300" aria-current="page">
                Student Progression
              </div>
            ) : (
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover-text-gray-600 hover:border-gray-300">
                Student Progression
              </a>
            )}
          </li>
        </ul>
      </div>
      <div>
        {currentTab === "labScatter" && <ScatterGraphParent paper={props.paper} type={"Lab"} />}
        {currentTab === "studentScatter" && <ScatterGraphParent paper={props.paper} type={"Student"} />}
        {currentTab === "labProgression" && <LineGraphParent paper={props.paper} />}
        {currentTab === "studentProgression" && <LineGraphParent paper={props.paper} type={"Student"} />}
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

export default LabsCompletedPage;
