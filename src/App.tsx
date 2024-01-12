import React from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/authentication/login";
import SingupPage from "./pages/authentication/sign-up";
import ForgetPassword from "./pages/authentication/forget-password";
import HomePage from "./pages/landing/home";
import CustomRoutes from "./routes";

function App() {

  return (
    // <Routes>
      <CustomRoutes/>
    // </Routes>
  );
}

export default App;
