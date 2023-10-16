import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Nebula } from "./pages/Nebula";
import { CreateForm } from "./pages/CreateForm";
import { Auth } from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nebula" element={<Nebula />} />
            <Route path="/createForm" element={<CreateForm />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
