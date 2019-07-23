import React, { Component } from 'react';
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends Component {
    constructor(props) {
        super(props)
        //console.log(props)
    }
    render() {
        return (
            <div className="TrackList"> 
           <Track onRemove={this.props.removeTrack} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd}/>
            </div>
        );
    }
}

export default TrackList;