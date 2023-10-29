import { useEffect, useState, useContext } from "react";
import { Onedata } from "../components/Onedata";
//
import { AuthContext } from "../context/AuthContext";

const Nebula = () => {
  //
  const [dataArray, setDataArray] = useState([]);
  //
  const { user } = useContext(AuthContext);
  const userObj = JSON.parse(user);
  //
  if (userObj) {
    // const userObj = JSON.parse(user);
    const token = userObj.token;
    console.log(token, "token:from Home.js");
  }
  //
  //
  useEffect(() => {
    //
    const fetchMyData = async () => {
      try {
        const response = await fetch("http://localhost:3006/tasks", {
          //this line is creating Bearer-- that gets verify with jwt.sign
          headers: { Authorization: `Bearer ${userObj.token}` },
        });

        // console.log(response, "response");
        // const { tasks } = await response.json();
        // console.log(tasks, "tasks from useEffect");

        const json = await response.json();
        if (response.ok) {
          //updating state
          //   setDataArray(json);
          setDataArray(json.tasks);
        }
        //
      } catch (err) {
        console.log(err);
      }
    };
    //

    // calling the function- fetchMyData-created inside useEffect
    if (user) {
      fetchMyData();
    }
  }, [user]);
  // button handler
  const statusHandler = async (oneDataID) => {
    // console.log(e);

    try {
      const updateRepsonse = await fetch(
        `http://localhost:3006/tasks/updateTaskCompleted/${oneDataID}`,
        {
          method: "PUT", // Use PUT method
          headers: { Authorization: `Bearer ${userObj.token}` },
        }
      );
      // console.log("Hi");
      //
      // const { tasks } = await updateRepsonse.json();
      // console.log(tasks, "tasks from statusHandler button func");
      // //
      // setDataArray(tasks);
      ///////////////////////////////////////////////////////////
      // now update the dataArray to show the updated data
      const response = await fetch("http://localhost:3006/tasks", {
        headers: { Authorization: `Bearer ${userObj.token}` },
      });
      const json = await response.json();
      setDataArray(json.tasks);

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
          headers: { Authorization: `Bearer ${userObj.token}` },
        }
      );

      console.log(deleteResponse.status, "deleteResponse.status");
      //checking if status is 200
      if (deleteResponse.status === 200) {
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
      <h2>Task Details</h2>
      {dataArray.length === 0 ? (
        <p>No tasks found for this user.</p>
      ) : (
        <ul>
          {dataArray.map((oneData) => (
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
        </ul>
      )}
    </div>
  );
};

export { Nebula };
