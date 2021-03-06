import React, { Component } from 'react';
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }
  search() {
    this.props.onSearch(this.state.term)
  }

  handleTermChange(e) {
  //sets the state of the search bae's term to the e.value
   this.setState({
     term: e.target.value
   })
}

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;