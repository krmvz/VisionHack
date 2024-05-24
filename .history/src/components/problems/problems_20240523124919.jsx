import React from 'react'

const Problems = () => {

  return (
    <div className='problems'>
      <h2>PROBLEMS</h2>
      <div className="cards">
        <div class="card">
            {/* <img src="image.jpg" alt="Card image" class="card-image"> */}
            <img src="" alt="images" />
            <div class="card-content">
            <h2 class="card-title">Card Title</h2>
            <p class="card-description">This is a description of the card. It provides a brief overview of the content.</p>
            <a href="#" class="card-button">Learn More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

ex const cardData = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 1' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 2' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 3' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 4' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 5' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh-hr3PwoUpqvsviNcV8EIxl7Gkcpkvr-JQ&usqp=CAU', text: 'Card 6' },
  ];


export default Problems;
