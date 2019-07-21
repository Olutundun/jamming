import React, { Component } from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{
        name: '',
        artist: '',
        album: '',
        id: '',
        playlistName: 'cool list',
        playlistTracks: "cool tracks"
      }]
    }
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>Ja<span className="highlight">mm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}/>
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;