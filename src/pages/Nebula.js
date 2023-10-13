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
        const { tasks } = await response.json();
        console.log(tasks, "tasks");
        //
        setDataArray(tasks);
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

    try {
      const updateResonse = await fetch(
        `http://localhost:3006/tasks/updateTaskCompleted/${oneDataID}`,
        {
          method: "PUT", // Use PUT method
        }
      );
      //
      const { tasks } = await updateResonse.json();
      console.log(tasks, "tasks");
      //
      setDataArray(tasks);
      ///////////////////////////////////////////////////////////
      // now update the dataArray to show the updated data
      // const response = await fetch("http://localhost:3006/tasks");
      // const json = await response.json();
      // setDataArray(json.tasks);

      //
      // const json = await response.json();
    } catch (err) {
      console.log(err);
    }
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
