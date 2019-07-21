import React, { Component } from 'react';
import "./Track.css";

class Track extends Component {
  state = {}
  
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          //trackname goes here
          <h3></h3>
          //artist goes here | album goes here
          <p></p>
        </div>
        //+ or - go here
        <button className="Track-action"></button>
      </div>
    );
  }
}

export default Track;