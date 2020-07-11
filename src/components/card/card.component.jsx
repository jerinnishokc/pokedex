import React from 'react';
import './card.styles.scss';

const Card = ({item}) => {
    return (        
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
           <img src={item.imageUrl} alt="Pokemon"/>
          </div>
          <div className="flip-card-back">
            <h1>{item.name}</h1> 
            <p>This is {item.type} pokemon!</p> 
            <p>Exp: {item.base_experience}</p> 
          </div>
        </div>
      </div>
    );
};

export default Card;