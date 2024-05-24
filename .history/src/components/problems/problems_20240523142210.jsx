import React from 'react';
import './problems.scss'; // Importing the SCSS file
import img from '../../images/card1.png'

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} alt="Card image" className="card-image" />
      <div className="card-content">
        <p className="card-description">{text}</p>
      </div>
    </div>
  );
};

const cardData = [
  { image: '../../images/card1.png', text: 'Automatic class attendance' },
  { image: '', text: 'Food recognition for cafeteria and dining hall' },
  { image: '', text: 'Pathology detection by photo of ECG' },
  { image: '', text: 'Automatic gate for cars with license plate number recognition' },
  { image: '', text: 'Handwritten text recognition' },
  { image: '', text: 'Card 6' },
];

const Problems = () => {
  return (
    <div className="problems">
      <h2>PROBLEMS</h2>
      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default Problems;
