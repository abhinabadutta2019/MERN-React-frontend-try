import { useEffect, useState } from "react";
import { Onedata } from "../components/Onedata";

const Nebula = () => {
  //
  const [dataArray, setDataArray] = useState([]);
  //
  useEffect(() => {
    //
    const fetchMyData = async () => {
      try {
        const response = await fetch("http://localhost:3006/tasks");

        // console.log(response, "response");
        const json = await response.json();
        //

        console.log(json.tasks, "json.tasks");
        //
        setDataArray(json.tasks);
      } catch (err) {
        console.log(err);
      }
    };
    //
    //calling
    fetchMyData();
  }, []);
  // button handler
  const statusHandler = async (oneDataID) => {
    // console.log(e);
    const response = await fetch(
      `http://localhost:3006/tasks/updateTaskCompleted/${oneDataID}`,
      {
        method: "PUT", // Use PUT method
      }
    );
    console.log(response, "response");
    // const json = await response.json();
    // try {
    // } catch (err) {}
  };
  //
  return (
    <div>
      {dataArray.map((oneData) => (
        <li key={oneData._id}>
          <Onedata
            dataFields={oneData}
            statusHandler={() => {
              statusHandler(oneData._id);
            }}
          />
        </li>
      ))}
    </div>
  );
};

export { Nebula };
