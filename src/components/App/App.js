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
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    } else {
      let newTrack = this.state.playListTracks.slice();
      newTrack.push(track);
      console.log(newTrack)
      this.setState({
        playlistTracks: newTrack
      })
    }
  }
  removeTrack(track) {
    let deleteTrack = this.state.playlistTracks.filter(playlistTrack => {
      return playlistTrack.id !== track.id
    })
    this.setState({
      playListTracks: deleteTrack
    })
  }

  updatePlaylistName(name) {
    //set the state of the playlist name to the input arg
    this.setState({
      playlistName: name
    })
  }
  savePlaylist() {
    
  }

  search() {
   //accepts a search term and logs it to the console/link to API
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Ja<span className="highlight">mm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search}/>
            <div className="App-playlist">
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
              <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;