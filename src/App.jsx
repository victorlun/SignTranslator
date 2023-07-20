import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Translate from "./views/Translate";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Navbar from "./components/NavBar/Navbar";

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
