import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CreateForm = () => {
  const { user } = useContext(AuthContext);
  const userObj = JSON.parse(user);
  const [message, setMessage] = useState("");

  const formHandler = async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    try {
      const response = await fetch(
        "https://mern-taskapp-backend-284n.onrender.com/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userObj.token}`,
          },
          body: JSON.stringify({
            name: name,
            description: description,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setMessage("Task created successfully");
        console.log(result, "result");
      } else {
        const errorData = await response.json();
        setMessage(errorData.error);
      }
    } catch (err) {
      console.log(err);
      setMessage("An error occurred");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Form</h2>
      {message && <div className="alert alert-warning">{message}</div>}
      <form onSubmit={formHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea id="description" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export { CreateForm };
