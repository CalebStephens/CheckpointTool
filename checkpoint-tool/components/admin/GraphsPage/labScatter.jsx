// Description: This file contains the scatter graph component for the lab page.
// shows the average of all students' responses to each lab

import React from "react";
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Scatter } from "react-chartjs-2";

// Register Chart.js components for use in the Scatter chart
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterGraph = (props) => {
  // Initialize an array to store the Scatter components
  let scatterComponents = [];

  props.tool.questions.forEach((question, idx) => {
    const testLabels = {
      x: question.labels.x.left + " - " + question.labels.x.right,
      y: question.labels.y.bottom + " - " + question.labels.y.top,
    };

    //filter throught list of students and get the ones that have a response for the current question
    // then map the responses to datasets for Scatter chart
    const datasets = props.students
      .filter((student) => {
        const studentResponse = student.labResponses.find((res) => res.lab === props.labName);
        return studentResponse && studentResponse.answers[idx];
      })
      .map((student) => {
        const studentResponse = student.labResponses.find((res) => res.lab === props.labName);
        const studentName = student.name; // Get the student's name
        const data = {
          x: studentResponse.answers[idx].x,
          y: studentResponse.answers[idx].y,
        };
        return {
          label: studentName, // Use the student's name as the label
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
      });

    // Customize the options for each question here
    const options = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: true,
            text: testLabels.x,
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
            text: testLabels.y,
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
      <div key={idx} className="mb-4">
        <h2 className="text-xl font-bold">{question.currentCategory.x + " - " + question.currentCategory.y}</h2>

        <Scatter
          data={{
            datasets: datasets, // Use the datasets array
          }}
          width={400}
          height={200}
          options={options} // Use the customized options for each question
          className="border border-gray-300 rounded-lg"
        />
      </div>
    );
  });

  return <div className="w-full">{scatterComponents}</div>;
};

export default ScatterGraph;
