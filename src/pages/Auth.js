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
      const response = await fetch("http://localhost:3006/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
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
      const response = await fetch("http://localhost:3006/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
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
        setError(errorData.message); // Update error state
      }

      // console.log("loggedUser:", loginResult);
    } catch (err) {
      console.log(err);
      setError("An error occurred"); // Update error state for general errors
    }
  };
  //
  return (
    <div>
      <h1>Auth Page</h1>
      {/*  */}
      <button onClick={toggleForm}>
        {isRegisterForm ? "Switch to Login" : "Switch to Register"}
      </button>
      {/*  */}
      <h2>{isRegisterForm ? "Register form" : "Login form"}</h2>
      {/*  */}
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display error if error state is not empty */}
      {isRegisterForm ? (
        <form onSubmit={registrationHandler}>
          <label>Username</label>
          <input id="username" type="text" required />
          <label>Password</label>
          <input id="password" type="text" required />
          <button type="submit">Register</button>
        </form>
      ) : (
        // <h2>Login form</h2>
        <form onSubmit={loginHandler}>
          <label>Username</label>
          <input id="loginUsername" type="text" required />
          <label>Password</label>
          <input id="loginPassword" type="text" required />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export { Auth };
