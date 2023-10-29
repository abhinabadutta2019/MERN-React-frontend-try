import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
//
// import Navbar from 'react-bootstrap/Navbar';
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
//

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/nebula" className="navbar-brand">
          Task Buddy
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user && (
              <>
                <li className="nav-item">
                  <Link to="/CreateForm" className="nav-link">
                    Create Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nebula" className="nav-link">
                    Task Details
                  </Link>
                </li>
              </>
            )}
          </ul>

          {user && (
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              Logout
            </button>
          )}

          {!user && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/auth" className="nav-link">
                  Auth
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
