import React from 'react';
import './WhyChooseUs.css';
import image1 from '../asset/Icon.png'; 
import image2 from '../asset/Icon (1).png'; 
import image3 from '../asset/Icon (2).png'; 


const WhyChooseUs = () => {
  const cardsData = [
    {
      img: image1,
      title: 'Best Travel Agency',
      description: 'Travel agencies that provide round trip, one way, and multi trip services.'
    },
    {
      img: image2,
      title: 'Best Travel Agency',
      description: 'Travel agencies that provide round trip, one way, and multi trip services.'
    },
    {
      img: image3,
      title: 'Best Travel Agency',
      description: 'Travel agencies that provide round trip, one way, and multi trip services.'
    }
  ];

  return (
    <div className="why-choose-us container my-5">
      <div className="row">
        <div className="col-md-6 text-section">
          <h2>Why Choose Us</h2>
          <p className="lead">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
          <a href="#" className="btn btn-outline-primary btn-learn-more">Learn More</a>
        </div>
        <div className="col-md-6 cards-section">
          <div className="d-flex flex-row justify-content-around align-items-center">
            {cardsData.map((card, index) => (
              <div key={index} className="card-container">
                <img src={card.img} alt={card.title} className="card-img mb-3" />
                <div className="card-content">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
                {index < cardsData.length - 1 && (
                  <div className="vertical-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
