import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//pages and components
// import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Nebula } from "./pages/Nebula";
import { CreateForm } from "./pages/CreateForm";
import { Auth } from "./pages/Auth";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  //
  const { user } = useContext(AuthContext);
  //
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* For root route */}
            <Route
              path="/"
              element={user ? <Nebula /> : <Navigate to="/auth" />}
            />

            {/* <Route path="/nebula" element={<Nebula />} /> */}

            {/* <Route path="/createForm" element={<CreateForm />} /> */}
            <Route
              path="/createForm"
              element={user ? <CreateForm /> : <Navigate to="/auth" />}
            />
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route
              path="/auth"
              element={!user ? <Auth /> : <Navigate to="/nebula" />}
            />
            {/*  */}
            {/* <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/auth" />}
            /> */}
            <Route
              path="/nebula"
              element={user ? <Nebula /> : <Navigate to="/auth" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
