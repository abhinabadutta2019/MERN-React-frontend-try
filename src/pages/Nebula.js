import { useEffect, useState } from "react";

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
  //
  return (
    <div>
      {dataArray.map((oneData) => (
        <li key={oneData._id}>
          <h3>{oneData.name}</h3>
          <p>Description : {oneData.description}</p>
          <p>Slot : {oneData.slot}</p>
          {
            <p>
              Work status :
              {oneData.completed ? <> Completed</> : <> Not completed</>}
            </p>
          }
        </li>
      ))}
    </div>
  );
};

export { Nebula };
