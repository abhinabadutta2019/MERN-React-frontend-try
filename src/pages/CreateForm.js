import { useState } from "react";

const CreateForm = () => {
  //
  //   const [formDataObject, setFormDataObject] = useState({});
  //
  const formHandler = async () => {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      });
      //
      const { createdTask } = await response.json();
      console.log(createdTask, "createdTask");
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

      <label>Name</label>
      <input id="name" type="text" />
      <label>Description</label>
      <textarea id="description" type="text" />

      <button onClick={formHandler}>Submit here</button>
    </div>
  );
};

export { CreateForm };
