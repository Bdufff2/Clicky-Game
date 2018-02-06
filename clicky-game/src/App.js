import React, {Component} from "react";
// import Game from './components/Game';
import Navbar from'./components/Navbar';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./gamecards.json";

class App extends React.Component {
    state = {
      cards,
      score: 0,
      topScore: 0
    };

    increaseScore = () => {
        this.setState({
            score: this.state.score + 1
        }) 
      }
    markAsClicked = (id) => {
      const cards = this.state.cards;
      
    }
    
    render(){
        return (
            
          <div>
            <Navbar score={this.state.score} topScore={this.state.topScore} />
              {/* <Game increaseScore={this.increaseScore} /> */}
            <Title />    
            <Wrapper>
              {this.state.cards.map(card => (
                <GameCard
                  id={card.id} 
                  key={card.id} 
                  name={card.name} 
                  image={card.image} 
                  increaseScore={this.increaseScore}
                />
              ))}
            </Wrapper>
          </div>
       )
    }
}
export default App;
