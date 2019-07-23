import React, { Component } from 'react';
import "./Playlist.css";
import Tracklist from "../TrackList/TrackList";

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value)
  }
  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handl} defaultValue={'New Playlist'} />
        <Tracklist isRemoval={true} onRemove={this.props.removeTrack} tracks={this.props.playlistTracks} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;