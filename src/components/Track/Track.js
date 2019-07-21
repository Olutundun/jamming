import React, { Component } from 'react';
import "./Track.css";

class Track extends Component {
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action">-</button>
      )
    } else {
      return (
        <button className="Track-action">+</button>
      )
    }
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