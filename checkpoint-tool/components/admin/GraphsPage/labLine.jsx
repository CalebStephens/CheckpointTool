import React from "react";
import { Chart as ChartJS, CategoryScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, PointElement, LineElement, Tooltip, Legend);

const LineGraph = (props) => {
  // Initialize an array to store the Line components
  let lineComponents = [];

  props.paper.tool.questions.forEach((question, idx) => {
    const testLabels = {
      x: question.labels.x.left + " - " + question.labels.x.right,
      y: question.labels.y.bottom + " - " + question.labels.y.top,
    };

    const xAverages = [];
    const yAverages = [];

    // Calculate the average x and y responses for each lab
    props.paper.labs.forEach((lab) => {
      const labName = lab.title;

      const xResponses = [];
      const yResponses = [];

      props.paper.students.forEach((student) => {
        const studentResponses = student.labResponses.find((res) => res.lab === labName);

        if (studentResponses) {
          xResponses.push(studentResponses.answers[idx].x);
          yResponses.push(studentResponses.answers[idx].y);
        }
      });

      const xAverage = xResponses.reduce((sum, value) => sum + value, 0) / xResponses.length;
      const yAverage = yResponses.reduce((sum, value) => sum + value, 0) / yResponses.length;

      xAverages.push({
        label: labName,
        data: xAverage,
      });

      yAverages.push({
        label: labName,
        data: yAverage,
      });
    });

    lineComponents.push(
      <div key={idx} className="mb-4">
        <h3 className="font-bold mb-2">
          {question.currentCategory.x + " - " + question.currentCategory.y}
        </h3>

        <div>
          <h3 className="font-bold mb-2">X Labels: {testLabels.x}</h3>
          <Line
            data={{
              labels: xAverages.map((entry) => entry.label),
              datasets: [
                {
                  label: "Average X Responses",
                  data: xAverages.map((entry) => entry.data),
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
              labels: yAverages.map((entry) => entry.label),
              datasets: [
                {
                  label: "Average Y Responses",
                  data: yAverages.map((entry) => entry.data),
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

  return <div className="w-full">{lineComponents}</div>;
};

export default LineGraph;
