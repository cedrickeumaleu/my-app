import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages";
import Login from "./pages/sign-in";
import Profil from "./pages/user";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <div className="App">
        <Header loginLink="login" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:id" element={<Login />} />
          <Route
            path="/profil"
            element={isAuthenticated ? <Profil /> : <Login />}
          />
        </Routes>
        {/*footer page d'accueil*/}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
