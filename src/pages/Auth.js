const Auth = () => {
  //
  const registrationHandler = (event) => {
    event.preventDefault();
    console.log("Hi");
  };
  //
  return (
    <div>
      <h2>Auth Page</h2>
      <form onSubmit={registrationHandler}>
        <label>Username</label>
        <input type="text" required />
        <label>Password</label>
        <input type="text" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export { Auth };
