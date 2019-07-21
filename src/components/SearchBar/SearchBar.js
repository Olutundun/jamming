import React, { Component } from 'react';
import "./SearchBar.css";

class SearchBar extends Component {
  state = {}
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;