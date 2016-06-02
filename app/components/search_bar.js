import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  onChange(e){
    this.setState({searchValue: e.target.value});
  }

  checkEnter(e){
    if(e.keyCode === 13){
      let result = this.props.addSector(this.state.searchValue.toUpperCase());

      if(!result){
        alert("That Sector does not exist");
      } else {
        this.setState({searchValue: ''});
      }

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
          onKeyUp={this.checkEnter.bind(this)}
          onChange={this.onChange.bind(this)} 
        />
      </div>
    );
  }
}

export default SearchBar;
