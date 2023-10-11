import { useState } from "react";
import * as XLSX from "xlsx";

const StudentUpload = () => {

    //https://www.c-sharpcorner.com/article/how-to-read-excel-file-in-next-js-application/
  const [items, setItems] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {
          type: "buffer",
        });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        console.log(data, 'data');
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
        accept=".xlsx .xls .XLS .XLSX"
      />

        <table className="table">
            <thead>
                <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Student Email</th>
                </tr>
            </thead>
            <tbody>
                {items.map((d, index) => (
                <tr key={index}>
                    <td>{d['Learner Name']}</td>
                    <td>{d['Person Code']}</td>
                    <td>{d['Study Email']}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default StudentUpload;
