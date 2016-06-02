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
      cachedMarketCap: null,
      options: null,
    }
  }

  componentDidMount(){
    axios.get(API).then((response) => {
      
      let cache = {};
      let marketCache = {}

      response.data.forEach((company) => {
        if(!cache[company.Sector]){
          cache[company.Sector] = [company];
          marketCache[company.Sector] = +company['Market Cap']; 
        } else {
          cache[company.Sector].push(company)
          marketCache[company.Sector] += +company['Market Cap'];
        }
      });

      this.setState({ cachedSectors: cache, cachedMarketCap: marketCache })

    });
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <TopBar />
        <MainContent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
