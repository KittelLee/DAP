import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Auto from "./pages/Auto";
import Manual from "./pages/Manual";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Join from "./pages/Join";
import "./styles/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/Auto" element={<Auto />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
