import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../asset/Logo.png'; 
import './TravelNavbar.css';

function TravelNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand me-5" href="#">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link px-3" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#tour-packages">TOUR PACKAGES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#our-service">OUR SERVICE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#gallery">GALLERY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#contact">CONTACT</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link navbar-phone" href="tel:123-456-7890">
                <FaPhoneAlt /> 123-456-7890
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default TravelNavbar;
