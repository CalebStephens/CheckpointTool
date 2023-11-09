// Desc: Component to render a Line chart for a specific student showing their responses to each question
// ChatGPT was used to help generate this code.

import React from "react";
import { Chart as ChartJS, CategoryScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components for use in the Line chart
ChartJS.register(CategoryScale, PointElement, LineElement, Tooltip, Legend);

const StudentLineGraph = (props) => {
  const { paper, studentName } = props;

  // Filter data for the specific student based on the provided studentName
  const student = paper.students.find((student) => student.name === studentName);

  if (!student) {
    return <div>Select a student</div>; // Display a message if the student is not found
  }

  // Initialize an array to store the Line components
  let lineComponents = [];

  paper.tool.questions.forEach((question, idx) => {
    const testLabels = {
      x: question.labels.x.left + " - " + question.labels.x.right,
      y: question.labels.y.bottom + " - " + question.labels.y.top,
    };

    const xResponses = [];
    const yResponses = [];

    // Iterate through labs in the order they appear in the paper
    paper.labs.forEach((lab) => {
      const labName = lab.title;

      // Check if the student has marked off the lab
      const hasMarkedLab = student.labResponses.find((res) => res.lab === labName);

      if (hasMarkedLab) {
        xResponses.push(hasMarkedLab.answers[idx].x);
        yResponses.push(hasMarkedLab.answers[idx].y);
      } else {
        // If the student hasn't marked off the lab, push null values
        xResponses.push(null);
        yResponses.push(null);
      }
    });

    lineComponents.push(
      <div key={idx} className="mb-4">
        <h3 className="font-bold mb-2">{question.currentCategory.x + " - " + question.currentCategory.y}</h3>

        <div>
          <h3 className="font-bold mb-2">X Labels: {testLabels.x}</h3>
          <Line
            data={{
              labels: paper.labs.map((lab) => lab.title),
              datasets: [
                {
                  label: "X Responses",
                  data: xResponses,
                  fill: false,
                  borderColor: "rgba(75,192,192,1)",
                  borderWidth: 2,
                  pointRadius: 5,
                },
              ],
            }}
            width={400}
            height={200}
            options={{
              scales: {
                x: {
                  type: "category",
                  position: "bottom",
                  title: {
                    display: true,
                    text: "Lab",
                    font: {
                      size: 14,
                      weight: "bold",
                    },
                  },
                },
                y: {
                  title: {
                    display: false,
                  },
                  min: -10,
                  max: 10,
                },
              },
            }}
            className="border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <h3 className="font-bold mb-2">Y Labels: {testLabels.y}</h3>
          <Line
            data={{
              labels: paper.labs.map((lab) => lab.title),
              datasets: [
                {
                  label: "Y Responses",
                  data: yResponses,
                  fill: false,
                  borderColor: "rgba(192,75,192,1)",
                  borderWidth: 2,
                  pointRadius: 5,
                },
              ],
            }}
            width={400}
            height={200}
            options={{
              scales: {
                x: {
                  type: "category",
                  position: "bottom",
                  title: {
                    display: true,
                    text: "Lab",
                    font: {
                      size: 14,
                      weight: "bold",
                    },
                  },
                },
                y: {
                  title: {
                    display: false,
                  },
                  min: -10,
                  max: 10,
                },
              },
            }}
            className="border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    );
  });

  return <div className="w-full">{lineComponents}</div>; // Render Line components for each question
};

export default StudentLineGraph;
