import React, { Component } from 'react';
import "./Playlist.css";
import Tracklist from "../TrackList/TrackList";

class Playlist extends Component {
  state = {}
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <Tracklist />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;