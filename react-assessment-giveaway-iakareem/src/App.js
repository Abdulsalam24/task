import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import "./App.css";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [user, setUser] = useState({})
  const [cart, setCart] = useState([])

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register setUser={setUser} />} />
      <Route path="/dashboard" element={<Dashboard userInfo={userInfo} setCart={setCart} cart={cart} />} />
      <Route path="/confirmation" element={<Confirmation userInfo={userInfo}/>} />

    </Routes>
  );
};

export default App;
