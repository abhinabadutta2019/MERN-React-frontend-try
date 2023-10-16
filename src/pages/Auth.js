import { useAuthContext } from "../hooks/useAuthContext";

const Auth = () => {
  //useAuthContext hook
  const { login } = useAuthContext(); // Use login function
  //
  const registrationHandler = async (event) => {
    event.preventDefault();
    // console.log("Hi");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const formObject = { username: username, password: password };
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

      //getting response as json
      const result = await response.json();

      //   console.log(result.user, "result.user");
      if (result.error) {
        console.log(`error: ${result.error}`);
      }

      //   console.log(result, "result");

      if (result.token) {
        // Save user data and update authentication
        localStorage.setItem("user", JSON.stringify(result));
        login(result); // Use login function
      }

      console.log("createdUser:", result);
    } catch (err) {
      console.log(err);
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
    const formObject = { username: username, password: password };
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
      const loginResult = await response.json();
      //
      if (loginResult.error) {
        console.log(`error: ${loginResult.error}`);
      }

      if (loginResult.token) {
        // Save user data and update authentication
        localStorage.setItem("user", JSON.stringify(loginResult));
        login(loginResult); // Use login function

        console.log(
          login(loginResult),
          "login(loginResult) from login frontend func"
        );
      }

      console.log("loggedUser:", loginResult);
      //
    } catch (err) {
      console.log(err);
    }
  };

  //

  //
  return (
    <div>
      <h1>Auth Page</h1>
      <h2>Register form</h2>
      <form onSubmit={registrationHandler}>
        <label>Username</label>
        <input id="username" type="text" required />
        <label>Password</label>
        <input id="password" type="text" required />
        <button type="submit">Register</button>
      </form>
      {/*  */}
      <h2>Login form</h2>
      <form onSubmit={loginHandler}>
        <label>Username</label>
        <input id="loginUsername" type="text" required />
        <label>Password</label>
        <input id="loginPassword" type="text" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { Auth };
