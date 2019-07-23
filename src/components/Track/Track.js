import React, { Component } from 'react';
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button onClick={this.removeTrack} className="Track-action">-</button>
      )
    } else {
      return (
        <button onClick={this.addTrack} className="Track-action">+</button>
      )
    }
  }

  addTrack() {
    //add to the playlist
    this.props.track(this.props.onAdd)
  }

  removeTrack() {
    this.props.onRemove(this.props.track)
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3></h3>
          <p> | </p>
        </div>
        <button onClick={this.renderAction} className="Track-action"></button>
      </div>
    );
  }
}

export default Track;