import React, { Component } from 'react';
import Header from "./components/Header"
import './App.css';
import Description from './components/Description';
import Images from './components/Images';
import characters from "./characters.json"
import Wrapper from "./components/Wrapper/index"

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    characters,
    clickedImages: [],
    score: 0,
    topScore: 0
  };

  handleClick = id => {
    let clickedImages = this.state.clickedImages;

    if(clickedImages.includes(id)){
      this.setState({ clickedImages: [], score: 0});
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score})
      }
      return alert('Sorry.  You Lost!  :(')
    }else{
      clickedImages.push(id)
      console.log(clickedImages)

      this.setState({ characters, clickedImages, score: clickedImages.length});

      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  }


   

    

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
       <Header 
       score={this.state.score}
       topScore={this.state.topScore}
       />
       <Description />
       <Wrapper>
        {this.state.characters.map(character => (
          <Images
            id={character.id}
            key={character.id}
            image={character.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}




export default App;
