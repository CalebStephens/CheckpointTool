// Description: This file contains the studentScatter component which renders a Scatter chart for a student's responses to a paper's questions.
// ChatGPT was used to help generate this code.

import React from "react";
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Scatter } from "react-chartjs-2";

// Register Chart.js components for use in the Scatter chart
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const StudentScatter = (props) => {
  const { studentName, paper } = props;
  const { tool } = paper;

  // Find the student in the paper's students array based on the provided studentName
  const student = paper.students.find((student) => student.name === studentName);

  if (!student) {
    return <></>; // Return an empty fragment if the student is not found
  }

  // Initialize an array to store the Scatter components
  let scatterComponents = [];

  // Iterate through each question
  tool.questions.forEach((question, questionIdx) => {
    // Generate labels for the x and y axes based on the question's labels
    const questionLabels = {
      x: question.labels.x.left + " - " + question.labels.x.right,
      y: question.labels.y.bottom + " - " + question.labels.y.top,
    };

    // Map lab responses to datasets for Scatter chart
    const datasets = student.labResponses.map((labResponse, labIdx) => {
      if (labResponse.answers[questionIdx]) {
        const data = {
          x: labResponse.answers[questionIdx].x,
          y: labResponse.answers[questionIdx].y,
        };
        return {
          label: `${labResponse.lab}`,
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

    // Filter out null datasets (those with no valid data)
    const validDatasets = datasets.filter((dataset) => dataset);

    // Customize the options for each question
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

    // Create Scatter components for each question
    scatterComponents.push(
      <div key={questionIdx} className="mb-4">
        <h2 className="text-xl font-bold">{question.currentCategory.x + " - " + question.currentCategory.y}</h2>
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

  return <div className="w-full">{scatterComponents}</div>; // Render Scatter components for each question
};

export default StudentScatter;
