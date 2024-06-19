import React, { useState } from 'react';
import './VacationDeals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import image1 from '../asset/Image.png';

const VacationDeals = () => {
  const allCardsData = [
    {
      img: image1,
      location: 'Paris, France',
      rating: 4.5,
      address: 'Eiffel Tower, Champ de Mars',
      description: '7 days tour, 2 persons',
      price: '$2000',
      category: 'Special Deals',
      url: '/paris' 
    },
    {
      img: image1,
      location: 'New York, USA',
      rating: 4.7,
      address: 'Statue of Liberty, Liberty Island',
      description: '5 days tour, 2 persons',
      price: '$1500',
      category: 'Popular',
      url: '/new-york' 
    },
    {
      img: image1,
      location: 'New York, USA',
      rating: 4.7,
      address: 'Statue of Liberty, Liberty Island',
      description: '5 days tour, 2 persons',
      price: '$1500',
      category: 'Popular',
      url: '/new-york' 
    },

    {
      img: image1,
      location: 'New York, USA',
      rating: 4.7,
      address: 'Statue of Liberty, Liberty Island',
      description: '5 days tour, 2 persons',
      price: '$1500',
      category: 'Popular',
      url: '/new-york' 
    },

    
   
  ];

  const [filteredCards, setFilteredCards] = useState(allCardsData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const handleFilterClick = (category, event) => {
    event.preventDefault();
    setActiveFilter(category);
    setShowAll(false);
    if (category === 'All') {
      setFilteredCards(allCardsData.slice(0, 8));
    } else {
      setFilteredCards(allCardsData.filter(card => card.category === category).slice(0, 8));
    }
  };

  const handleViewAllClick = () => {
    setShowAll(true);
    setFilteredCards(allCardsData);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">The best place for vacation</h1>

      <div className="d-flex justify-content-center mb-4 filter-links">
        {['All', 'Special Deals', 'Popular', 'Recommendation', 'Best Price'].map(category => (
          <a
            href="#"
            key={category}
            className={`filter-link ${activeFilter === category ? 'active' : ''}`}
            onClick={(e) => handleFilterClick(category, e)}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {filteredCards.map((card, index) => (
          <div key={index} className={`col ${!showAll && index > 7 ? 'd-none' : ''}`}>
            <div className="card h-100">
              <img src={card.img} className="card-img-top" alt={card.location} />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-1">
                    <FontAwesomeIcon  icon={faMapMarkerAlt} /> 
                    <span className="location-text">{card.location}</span>
                  </h5>
                  <div className="card-rating">
                    <FontAwesomeIcon icon={faStar} className="text-warning" /> {card.rating}
                  </div>
                </div>
                <p className="card-text anderes mb-2">{card.address}</p>
                <p className="card-text  deskrip mb-2">{card.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <h5 className="card-price text-primary mb-0">{card.price}</h5>
                  <a href={card.url} className="btn btn-link moredis p-0">View More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && filteredCards.length > 8 && (
        <div className="text-center mt-4">
          <a href="#" className="btn btn-primary btn-view-all" onClick={handleViewAllClick}>View All</a>
        </div>
      )}

    </div>
  );
};

export default VacationDeals;
