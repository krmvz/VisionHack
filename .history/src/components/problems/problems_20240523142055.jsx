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
  { image: '', text: 'Card 2' },
  { image: '', text: 'Card 3' },
  { image: '', text: 'Card 4' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 5' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 6' },
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
