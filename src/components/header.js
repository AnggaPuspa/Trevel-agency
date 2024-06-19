import React from 'react';
import './Header.css'; 

function Header() {
  const title = "It’s a Big World Out There, Go Explore";
  const subtitle = "Time tracking software used by millions. A simple time tracker and timesheet app that lets you track work hours across projects.";
  const buttonText = "Discover Now";
  const buttonColor = "FA7436";

  return (
    <header className="bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-2">{title}</h1>
          </div>
          <div className="col-lg-6">
            <p className="lead">{subtitle}</p>
            <a href="#" className={`btn discover-btn bg-${buttonColor}`}>{buttonText}</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
