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
  //
  const statusHandler = (e) => {
    console.log(e);
  };
  //
  return (
    <div>
      {dataArray.map((oneData) => (
        <li key={oneData._id}>
          <Onedata dataFields={oneData} statusHandler={statusHandler} />
        </li>
      ))}
    </div>
  );
};

export { Nebula };
