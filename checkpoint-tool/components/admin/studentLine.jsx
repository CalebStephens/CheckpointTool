import React from "react";
import { Chart as ChartJS, CategoryScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, PointElement, LineElement, Tooltip, Legend);

const StudentLine = (props) => {
  const { paper, studentName } = props;

  // Filter data for the specific student
  const student = paper.students.find((student) => student.name === studentName);

  if (!student) {
    return <div>Student not found</div>;
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

    // Iterate through labs and get the student's responses
    paper.labs.forEach((lab) => {
      const labName = lab.title;

      const studentResponses = student.labResponses.find((res) => res.lab === labName);

      if (studentResponses) {
        xResponses.push(studentResponses.answers[idx].x);
        yResponses.push(studentResponses.answers[idx].y);
      }
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

  return <div className="w-full">{lineComponents}</div>;
};

export default StudentLine;
