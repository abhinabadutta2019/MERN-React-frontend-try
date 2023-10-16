import { Link } from "react-router-dom";
import { useContext } from "react";
// import { useAuthContext } from "../hooks/useAuthContext";
import { AuthContext } from "../context/AuthContext";
//
const Navbar = () => {
  //useAuthContext hook
  // const { logout } = useAuthContext(); // Use logout function
  const { logout } = useContext(AuthContext);
  //
  const handleLogout = () => {
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
        <button onClick={handleLogout}>Logout</button>
        {/*  */}
        <Link to="/auth">Auth</Link>
        <Link to="/nebula">Nebula</Link>
        <Link to="/CreateForm">Create Form</Link>
      </div>
    </header>
  );
};

export default Navbar;
