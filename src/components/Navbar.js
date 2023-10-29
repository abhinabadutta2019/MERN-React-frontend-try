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
        <Link to="/nebula">
          <h1>Task Buddy</h1>
        </Link>

        <nav>
          {user && (
            <>
              <Link to="/CreateForm">Create-Task </Link>
              <Link to="/nebula"> Task-Details </Link>
              {/* <button onClick={logoutHandler}>Logout</button> */}
            </>
          )}
          {!user && (
            <>
              <Link to="/auth">Auth</Link>
            </>
          )}
        </nav>
        {/* button */}
        {user && <button onClick={logoutHandler}>Logout</button>}

        {/* <Link to="/CreateForm">Create Task</Link>
        <Link to="/nebula">Nebula</Link> */}

        {/* <Link to="/auth">Auth</Link> */}
        {/* <button onClick={logoutHandler}>Logout</button> */}
      </div>
    </header>
  );
};

export default Navbar;
