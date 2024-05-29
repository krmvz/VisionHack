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

import ll from './';

const cardData = [
  { image: 'https://st4.depositphotos.com/1025323/27408/i/450/depositphotos_274081664-stock-photo-energy-of-abstract-landscape.jpg', text: 'Automatic class attendance' },
  { image: 'https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9zY3Vyb3xlbnwwfHwwfHx8MA%3D%3D', text: 'Food recognition for cafeteria and dining hall' },
  { image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', text: 'Pathology detection by photo of ECG' },
  { image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', text: 'Automatic gate for cars with license plate number recognition' },
  { image: 'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg', text: 'Handwritten text recognition' },
  { image: 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716336000&semt=ais_user', text: 'Automatic traffic light based on computer vision' },
];

const Problems = () => {
  return (
    <div className="problems container">
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
