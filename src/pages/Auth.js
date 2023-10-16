const Auth = () => {
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

      //getting respone as json
      const result = await response.json();

      //   console.log(result.user, "result.user");
      if (result.error) {
        console.log(`error: ${result.error}`);
      }

      console.log("createdUser:", result.message);
    } catch (err) {
      console.log(err);
    }
  };
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
    </div>
  );
};

export { Auth };
