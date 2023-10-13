import { useEffect, useState } from "react";
import { Onedata } from "../components/Onedata";

//
let countHere = 0;

//

const Nebula = () => {
  let anotherCount = 0;
  //
  const [dataArray, setDataArray] = useState([]);
  const [buttonCount, setButtonCount] = useState(anotherCount);
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
      // setDataArray(tasks);
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
  const deleteHandler = () => {
    countHere = countHere + 1;

    console.log(countHere, "countHere");

    // setButtonCount(countHere);
    // console.log(buttonCount);
  };
  //
  const deleteHandler1 = () => {
    anotherCount = anotherCount + 1;

    console.log(anotherCount, "anotherCount");

    setButtonCount(anotherCount);
    // console.log(buttonCount);
  };
  //
  return (
    <div>
      <h2>{countHere}</h2>
      <h2>{buttonCount}</h2>
      {dataArray.map((oneData) => (
        <li key={oneData._id}>
          <Onedata
            dataFields={oneData}
            statusHandler={() => {
              statusHandler(oneData._id);
            }}
            //
            deleteHandler={deleteHandler}
            deleteHandler1={deleteHandler1}
          />
        </li>
      ))}
    </div>
  );
};

export { Nebula };
