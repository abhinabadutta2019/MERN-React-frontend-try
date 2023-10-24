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
        console.log(tasks, "tasks from useEffect");
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
      // console.log("Hi");
      //
      const { tasks } = await updateResonse.json();
      console.log(tasks, "tasks from statusHandler button func");
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
  const deleteHandler = async (oneDataID) => {
    // console.log("Hi");
    // console.log(oneDataID);

    try {
      const deleteResponse = await fetch(
        `http://localhost:3006/tasks/${oneDataID}`,
        {
          method: "DELETE",
        }
      );

      console.log(deleteResponse.status, "deleteResponse.status");
      //checking if status is 200
      if (deleteResponse.status == 200) {
        // console.log(deleteResponse.status, "deleteResponse.status");
        const filterValue = dataArray.filter((item) => item._id !== oneDataID);
        // console.log(filterValue, "filterValue");
        //
        setDataArray(filterValue);
      }

      // const deleteResult = await deleteResponse.json();
      // console.log(deleteResult, "deleteResult");

      //
    } catch (err) {
      console.log("err of deleteResponse", err);
    }
  };
  //
  return (
    <div>
      <h2>Nebula</h2>
      {/*  */}
      {dataArray &&
        dataArray.map((oneData) => (
          <li key={oneData._id}>
            <Onedata
              dataFields={oneData}
              statusHandler={() => {
                statusHandler(oneData._id);
              }}
              deleteHandler={() => {
                deleteHandler(oneData._id);
              }}
            />
          </li>
        ))}
    </div>
  );
};

export { Nebula };
