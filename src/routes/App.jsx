import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import { Filter } from "../pages/Filter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Filter />} />
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
