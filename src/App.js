import React, {Component} from 'react';
import GameList from './GameList';
import './App.css';

class App extends Component {
  state = {
    games: [
      {
        name: 'Nemesis',
        opinion: 'Tetszik',
        own: true,
      },
      {
        name: 'Nyugati királyság lovagjai',
        opinion: 'Semleges',
        own: true,
      },
      {
        name: 'A mars terraformálása',
        opinion: 'Nem tetszik',
        own: false,
      },
      {
        name: 'Babszüret',
        opinion: 'Semleges',
        own: false,
      }
    ],
  }
  render() {
    return (
      <div>
        <GameList gameData={this.state.games} />        
      </div>
    )
  }
}

export default App;
