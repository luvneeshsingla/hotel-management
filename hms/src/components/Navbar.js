import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark text-end fixed-top">
        <div className=" container-fluid py-2 text-white">
          <h1 className=" px-4 ">Paradise Hotel</h1>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  <h5> Home </h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/booking"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  <h5> Booking </h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  <h5> Dashboard </h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  <h5> Logout </h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
