import React from "react";
import "./GameCard.css";


const GameCard = props => (
  <div class="wrapper">
    <div onClick={() => props.setClicked(props.id)} className="card">
      <div className="card-image">
            <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default GameCard;
