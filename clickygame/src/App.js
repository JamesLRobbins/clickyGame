import React, { Component } from 'react';
import Header from "./components/Header"
import './App.css';
import Description from './components/Description';
import Images from './components/Images';
import characters from "./characters.json"
import Wrapper from "./components/Wrapper/index"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clicked: false,
    characters: characters
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
       <Header />
       <Description />
       <Wrapper>
        {this.state.characters.map(character => (
          <Images
            id={character.id}
            key={character.id}
            image={character.image}
            name={character.name}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}




export default App;
