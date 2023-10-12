import { useEffect, useState } from "react";

const Home = () => {
  const [dataArray, setDataArray] = useState([]);
  //
  //here useEffect fires a function when the component is renderd
  //[] empty array( called dependency array) argument makes sure, useEffect hook only fires - the inner function -onece  , only when the component is renderd
  //

  useEffect(() => {
    // recommended not to use async function with useEffect- so, another inner async function used
    //

    const fetchMyData = async () => {
      try {
        const response = await fetch("http://localhost:3006/tasks");
        //??
        const json = await response.json();

        // console.log(response, "response");
        // console.log(json.tasks, "json.tasks");
        //
        if (response.ok) {
          //updating state
          //   setDataArray(json);
          setDataArray(json.tasks);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    // calling the function- fetchMyData-created inside useEffect
    fetchMyData();
  }, []);
  //
  return (
    <div className="Home">
      <h2>Home</h2>
      <div className="tasks">
        {dataArray &&
          dataArray.map((oneData) => (
            <div key={oneData._id}>{oneData.name}</div>
          ))}
      </div>
    </div>
  );
};

export default Home;
