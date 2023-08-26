import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import "./App.css";
import { AddLinks } from "./components/links/addLinks";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addLinks" element={<AddLinks />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;
