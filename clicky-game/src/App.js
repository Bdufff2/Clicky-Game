import React, {Component} from "react";
// import Game from './components/Game';
import Navbar from'./components/Navbar';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import cards from "./gamecards.json";

class App extends React.Component {
    state = {
      cards,
      score: 0,
      topScore: 0
    };

    // componentDidMount() {
    // }
    shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
    increaseScore = () => {
        this.setState({
            score: this.state.score + 1
        }) 
      }
    markAsClicked = (id) => {
      const cards = this.state.cards;
      const clickedCard = cards.filter(card => card.id === id);

      if (clickedCard[0].clicked){

        console.log ("Current Score: " + this.score);
        console.log ("Best Score: " + this.topScore);

        this.score = 0;

        for (let i = 0 ; i < cards.length ; i++){
          cards[i].clicked = false;
      }
        // this.setState({ score });
        // this.setState({ cards });
    } else {
      clickedCard[0].clicked = true;
      cards.increaseScore(this.score);

      if (this.score > this.topScore){
        this.topScore = this.score;
        // this.setState({ topScore });
      }
      // cards.sort(function(a, b){return 0.5 - Math.random()});
      this.shuffleArray(cards);
      this.setState({ cards });
      // this.setState({ score });
      // this.setState({ topScore });
    }
  };
    render() {
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
                  // increaseScore={this.increaseScore}
                />
              ))}
            </Wrapper>
            <Footer />
          </div>
       )
    }
}

export default App;
