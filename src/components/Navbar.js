import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        {/* How link is different to  <Route path="/" */}
        <Link to="/">
          <h1>My App Title</h1>
        </Link>
        <Link to="/nebula">Nebula</Link>
        <Link to="/CreateForm">Create Form</Link>
      </div>
    </header>
  );
};

export default Navbar;
