import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const [dataArray, setDataArray] = useState([]);

  const { user } = useAuthContext();
  //
  //here useEffect fires a function when the component is renderd
  //[] empty array( called dependency array) argument makes sure, useEffect hook only fires - the inner function -onece  , only when the component is renderd
  //

  useEffect(() => {
    // recommended not to use async function with useEffect- so, another inner async function used
    //

    const fetchMyData = async () => {
      try {
        const response = await fetch("http://localhost:3006/tasks", {
          //this line is creating Bearer-- that gets verify with jwt.sign
          headers: { Authorization: `Bearer ${user.token}` },
        });
        //??
        const json = await response.json();

        // console.log(response, "response");
        // console.log(json.tasks, "json.tasks");
        //
        if (response.ok) {
          //updating state

          console.log(json, "json");
          //   setDataArray(json);
          setDataArray(json.tasks);
        }
        //
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    // this to check user and call the useeffect

    if (user) {
      // console.log(user);
      fetchMyData();
    }

    // calling the function- fetchMyData-created inside useEffect
    // fetchMyData();
  }, [user]);
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
