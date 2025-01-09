import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import LogIn from "./pages/Auth/logIn/LogInForm";
import Register from "./pages/Auth/register/RegisterForm";
import "./App.css";
import { AuthProvider } from "./pages/Auth/AuthProvider";
import Show from "./pages/Show/Show";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<Show contentType={0} />} />
          <Route path="/tv/:id" element={<Show contentType={1} />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
