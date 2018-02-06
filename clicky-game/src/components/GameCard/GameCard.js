import React from "react";
import "./GameCard.css";


const GameCard = props => (
  
    <div onClick={() => props.markAsClicked(props.id)} className="card">
      <div className="card-image">
            <img alt={props.name} src={props.image} />
      </div>
    </div>
  
);

export default GameCard;
