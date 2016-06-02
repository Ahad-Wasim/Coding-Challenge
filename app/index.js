import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TopBar from './components/top_bar.js';
import MainContent from './components/main_content.js';
import './assets/styles/main.css';

const API = "http://data.okfn.org/data/core/s-and-p-500-companies/r/constituents-financials.json";

class App extends Component {
  constructor(){
    super()
    this.state = {
      cachedSectors: null,
      options: null
    }
  }

  componentDidMount(){
    axios.get(API).then((response) => {
      
      let cache = {};

      response.data.forEach((company) => {
        if(!cache[company.Sector]){
          cache[company.Sector] = [company]
        } else {
          cache[company.Sector].push(company)
        }
      });

      this.setState({cachedSectors: cache})

    });
  }

  render(){
    return (
      <div>
        <TopBar />
        <MainContent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
