import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  //
  const logoutHandler = () => {
    //
    logout();
  };
  //
  return (
    <header>
      <div className="container">
        {/* How link is different to  <Route path="/" */}
        <Link to="/">
          <h1>My App Title</h1>
        </Link>
        {/*  */}
        <Link to="/CreateForm">Create Task</Link>
        <Link to="/nebula">Nebula</Link>
        {/*  */}
        {user ? (
          <>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/auth">Auth</Link>
          </>
        )}
        {/* <Link to="/auth">Auth</Link> */}
        {/* <button onClick={logoutHandler}>Logout</button> */}
      </div>
    </header>
  );
};

export default Navbar;
