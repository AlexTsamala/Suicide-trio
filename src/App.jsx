import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import "./App.css";
import { AddLinks } from "./components/links/addLinks/AddLinks";
import Profile from "./components/Profile/Profile";
import Preview from "./components/Preview/Preview";
import Header from "./components/Profile/Header/Header";

function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname !== "/login" &&
      pathname !== "/signup" &&
      pathname !== "/Preview" ? (
        <Header />
      ) : null}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addLinks" element={<AddLinks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
