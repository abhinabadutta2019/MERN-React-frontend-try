const Auth = () => {
  //
  const registrationHandler = (event) => {
    event.preventDefault();
    // console.log("Hi");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const formObject = { username: username, password: password };
    try {
      console.log(formObject, "formObject");
    } catch (err) {
      console.log(err);
    }
  };
  //
  return (
    <div>
      <h2>Auth Page</h2>
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
