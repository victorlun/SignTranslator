import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Translate from "./Views/Translate";
import Login from "./Views/Login";
import Profile from "./Views/Profile";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
      < Navbar/>
        <Routes>
          <Route path="/translate" element={<Translate />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
