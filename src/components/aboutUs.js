import React from 'react';
import './AboutUs.css'; 
import aboutImage from '../asset/Image.png'; 

function AboutUs() {
  const title = 'ABOUT US';
  const subtitle = 'The Best And Most trusted service';
  const description = 'The Best And Most trusted service. We are the largest holiday service provider in the world with partners and places spread all over the world by prioritizing service and customer satisfaction.';
  const buttonText = 'Discover Now';
  const buttonColor = 'FA7436';
  const stats = [
    { value: '200+', label: 'Customer & Partners' },
    { value: '500+', label: 'Places in the World' },
    { value: '1k+', label: 'Success Journey' }
  ];

  return (
    <section className="about-us-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image-container">
              <img src={aboutImage} alt="About Us" className="img-fluid rounded about-image" />
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="about-content">
              <h3 className="about-title text-uppercase text-primary">{title}</h3>
              <h1 className="">{subtitle}</h1>
              <p className="about-description text-muted">
                {description}
              </p>
              <a href="#" className={`btn discover-btn bg-${buttonColor}`}>{buttonText}</a>
              <div className="about-stats mt-4">
                <div className="row">
                  {stats.map((item, index) => (
                    <div className="col-md-4 card-2" key={index}>
                      <h4 className="text-primary">{item.value}</h4>
                      <p className="text-muted">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
