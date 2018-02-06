import React from "react";
import Game from './components/Game';
import Navbar from'./components/Navbar';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends React.Component {
    state = {
        score: 0,
        topScore: 0
    };
    increaseScore = () => {
        this.setState({
            score: this.state.score + 1
        }) 
    }

    
    render(){
        return (
            
          <div>
              <Navbar score={this.state.score} topScore={this.state.topScore} />
              <Game increaseScore={this.increaseScore} />
                    
            <Wrapper>
              <Title>Friends List</Title>
              {this.state.friends.map(friend => (
                <FriendCard
                  removeFriend={this.removeFriend}
                  id={friend.id}
                  key={friend.id}
                  name={friend.name}
                  image={friend.image}
                  occupation={friend.occupation}
                  location={friend.location}
                />
              ))}
            </Wrapper>
          </div>
       )
    }
}
export default App;
