import React from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/authentication/login";
import SingupPage from "./pages/authentication/sign-up";
import ForgetPassword from "./pages/authentication/forget-password";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/auth/login" element={<LoginPage/>}/>
      <Route path="/auth/sign-up" element={<SingupPage/>}/>
      <Route path="/auth/forget-password" element={<ForgetPassword/>}/>
    </Routes>
  );
}

export default App;
