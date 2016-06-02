import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      searchValue: ''
    }
  }


  render(){
    return (
      <div className="searchBar-wrapper">
        <input
          type="text"
          className="searchBar" 
          placeholder="ex: engineering" 
          value={this.state.searchValue}
          onChange={(e) => this.setState(e.target.value)} 
        />
      </div>
    );
  }
}

export default SearchBar;
