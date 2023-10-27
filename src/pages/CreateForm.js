import { useContext } from "react";
//
import { AuthContext } from "../context/AuthContext";

const CreateForm = () => {
  //authContext hook
  const { user } = useContext(AuthContext);
  const userObj = JSON.parse(user);
  //
  if (userObj) {
    // const userObj = JSON.parse(user);
    const token = userObj.token;
    console.log(token, "token:from Home.js");
  }
  //
  const formHandler = async (event) => {
    //
    event.preventDefault();
    //
    // console.log(formDataObject, "formDataObject-start");
    //form html portion
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    const formObject = { name: name, description: description };
    console.log(formObject, "formObject");
    // setFormDataObject(formObject);
    // console.log(formDataObject, "formDataObject-end");

    try {
      const response = await fetch("http://localhost:3006/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userObj.token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      });

      //getting respone as json
      const result = await response.json();

      console.log(result, "result");
      if (result.error) {
        console.log(`error: ${result.error}`);
      }

      console.log("createdTask:", result.createdTask);

      //
      //   const { createdTask } = await response.json();
      //   console.log(createdTask, "createdTask");
      //
    } catch (err) {
      console.log(err);
    }

    //
  };
  //
  return (
    <div>
      <h2>Create Form</h2>

      {/* <form> */}
      <form onSubmit={formHandler}>
        <label>Name</label>
        <input id="name" type="text" required />
        <label>Description</label>
        <textarea id="description" type="text" required />
        {/*  */}
        <button type="submit">Submit here</button>
      </form>
    </div>
  );
};

export { CreateForm };
