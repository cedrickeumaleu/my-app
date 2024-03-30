import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //déconnexion de l'utilisateur et retour à la page d'accueil
  const sign_out = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src="../img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <div className="main-nav-item" onClick={sign_out}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
            <div className="main-nav-item">
              Tony
              <i className="fa fa-user-circle"></i>
            </div>
          </>
        ) : (
          <Link className="main-nav-item" to={"../login/:id"}>
            <i className="fa fa-sign-in"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
