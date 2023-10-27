import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const logout = useContext(AuthContext).logout;
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
        <Link to="/auth">Auth</Link>
        <Link to="/nebula">Nebula</Link>
        <Link to="/CreateForm">Create Form</Link>
        {/*  */}

        <button onClick={logoutHandler}>Logout</button>
      </div>
    </header>
  );
};

export default Navbar;
