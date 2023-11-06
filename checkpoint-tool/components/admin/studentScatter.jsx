import React from "react";
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Scatter } from "react-chartjs-2";
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const StudentScatter = (props) => {
  const { studentName, paper } = props;
  const { tool } = paper;

  // Find the student in the paper's students array based on the provided studentName
  const student = paper.students.find((student) => student.name === studentName);

  if (!student) {
    return <></>;
  }

  // Initialize an array to store the Scatter components
  let scatterComponents = [];

  // Iterate through each question
  tool.questions.forEach((question, questionIdx) => {
    const questionLabels = {
      x: question.labels.x.left + " - " + question.labels.x.right,
      y: question.labels.y.bottom + " - " + question.labels.y.top,
    };

    const datasets = student.labResponses.map((labResponse, labIdx) => {
      if (labResponse.answers[questionIdx]) {
        const data = {
          x: labResponse.answers[questionIdx].x,
          y: labResponse.answers[questionIdx].y,
        };
        return {
          label: `Lab ${labIdx + 1}`,
          data: [data],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
        };
      }
      return null;
    });

    const validDatasets = datasets.filter((dataset) => dataset);

    // Customize the options for each question here
    const options = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: true,
            text: questionLabels.x,
            font: {
              size: 14,
              weight: "bold",
            },
          },
          min: -10,
          max: 10,
        },
        y: {
          title: {
            display: true,
            text: questionLabels.y,
            font: {
              size: 14,
              weight: "bold",
            },
          },
          min: -10,
          max: 10,
        },
      },
    };

    scatterComponents.push(
      <div key={questionIdx} className="mb-4">
        <Scatter
          data={{
            datasets: validDatasets,
          }}
          width={400}
          height={200}
          options={options}
          className="border border-gray-300 rounded-lg"
        />
      </div>
    );
  });

  return <div className="w-full">{scatterComponents}</div>;
};

export default StudentScatter;
