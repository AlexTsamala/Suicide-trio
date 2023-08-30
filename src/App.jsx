import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import "./App.css";
import { AddLinks } from "./components/links/addLinks/AddLinks";
import Profile from "./components/Profile/Profile";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addLinks" element={<AddLinks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
