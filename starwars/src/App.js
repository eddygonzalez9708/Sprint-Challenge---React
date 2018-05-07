import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList'; 
import Paginator from './Paginator'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [], 
      next: '', 
      previous: '', 
      error: '' 
    };
  }

  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    this.fetchChars('https://swapi.co/api/people/'); 
  }

   fetchChars = urlString => {
     return fetch(urlString)
     .then(res => {
       return res.json();
     })
     .then(data => {
       this.setState({ starwarsChars: data.results, next: data.next, previous: data.previous });
     })
     .catch(err => {
       throw new Error(err);
     });
   }; 
  
  render() {
    const { error, starwarsChars, next, previous } = this.state; 
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1> 
        <Paginator next={next} previous={previous} fetchChars={this.fetchChars} /> 
        <CharacterList chars={starwarsChars} /> 
      </div>
    );
  }
}

export default App;
