//
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//

const Auth = () => {
  //authContext hook
  const { login } = useContext(AuthContext);
  //
  const [isRegisterForm, setIsRegisterForm] = useState(true);
  //
  const [error, setError] = useState(""); // State variable for error

  //
  const toggleForm = () => {
    setIsRegisterForm((prevIsRegisterForm) => !prevIsRegisterForm);
  };
  //

  const registrationHandler = async (event) => {
    event.preventDefault();
    // console.log("Hi");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // const formObject = { username: username, password: password };
    try {
      const response = await fetch(
        "https://mern-taskapp-backend-284n.onrender.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      //   console.log(formObject, "formObject");

      if (response.ok) {
        const result = await response.json();
        //
        console.log(result, "regestration from login-response.ok");
        if (result.token) {
          login(result);
        }
      } else {
        const errorData = await response.json();

        setError(errorData.error); // Update error state
      }

      // console.log("createdUser:", result);
    } catch (err) {
      console.log(err);
      setError("An error occurred");
    }
  };
  //
  const loginHandler = async (event) => {
    //
    event.preventDefault();
    //
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    //

    //

    try {
      const response = await fetch(
        "https://mern-taskapp-backend-284n.onrender.com/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      //
      if (response.ok) {
        const loginResult = await response.json();
        //
        console.log(loginResult, "loginResult from login-response.ok");
        if (loginResult.token) {
          login(loginResult);
        }
      } else {
        const errorData = await response.json();
        if (errorData.error) {
          setError(errorData.error); // Show Zod validation error
        } else {
          setError(errorData.message); // Show backend error
        }
      }

      // console.log("loggedUser:", loginResult);
    } catch (err) {
      console.log(err);
      setError("An error occurred"); // Update error state for general errors
    }
  };
  //
  return (
    <div className="container mt-5">
      {/* <h1 className="mb-4">Auth Page</h1> */}
      <h2>{isRegisterForm ? "Register Form" : "Login Form"}</h2>
      <button className="btn btn-outline-secondary" onClick={toggleForm}>
        {isRegisterForm ? "Switch to Login" : "Switch to Register"}
      </button>

      {error && <div className="alert alert-danger">{error}</div>}
      {isRegisterForm ? (
        <form onSubmit={registrationHandler}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      ) : (
        <form onSubmit={loginHandler}>
          <div className="mb-3">
            <label htmlFor="loginUsername" className="form-label">
              Username
            </label>
            <input
              id="loginUsername"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              id="loginPassword"
              type="password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export { Auth };
