import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  //
  const { logout } = useLogout();
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
