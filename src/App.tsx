import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import LogIn from "./pages/Auth/logIn/LogInForm";
import Register from "./pages/Auth/register/RegisterForm";
import "./App.css";
import { AuthProvider } from "./pages/Auth/AuthProvider";
import { useState, useEffect } from "react";
import ShowMovie from "./pages/Show/ShowMovie";
function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<ShowMovie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
