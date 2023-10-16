const Auth = () => {
  return (
    <div>
      <h2>Auth Page</h2>
      <form>
        <label>Username</label>
        <input type="text" required />
        <label>Password</label>
        <input type="text" required />
        <button>Register</button>
      </form>
    </div>
  );
};

export { Auth };
