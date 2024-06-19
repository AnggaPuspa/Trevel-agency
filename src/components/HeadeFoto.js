import React from 'react';
import './header2.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import headerImage from '../asset/Main Image.png'; 

function HeadeFoto() {
  return (
    <header className="header-photo">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <img src={headerImage} alt="Header Image" className="img-fluid w-100" />
          </div>
          <div className="col-lg-3 d-flex flex-column align-items-center justify-content-center">
            <div className="follow-us">
              <p className="follow-text">FOLLOW US</p>
              <div className="follow-line"></div>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeadeFoto;
