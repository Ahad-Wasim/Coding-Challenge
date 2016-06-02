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
      cachedCompanyList:null,
      options: []
    }
  }

  componentDidMount(){
    axios.get(API).then((response) => {
      
      let cache = {};
      let marketCache = {}

      response.data.forEach((company) => {

        let sector = company.Sector.toUpperCase();

        if(!cache[sector]){
          cache[sector] = [company];
          marketCache[sector] = +company['Market Cap']; 
        } else {
          cache[sector].push(company)
          marketCache[sector] += +company['Market Cap'];
        }
      });

      this.setState({ 
        cachedSectors: cache,
        cachedMarketCap: marketCache,
        cachedCompanyList: response.data  
      });

    });
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <TopBar />
        <MainContent 
          companyData={this.state} 
          addSector={this.addSector.bind(this)}
          removeSector={this.removeSector.bind(this)}
        />
      </div>
    );
  }

  addSector(sector){
    if(this.state.cachedSectors[sector]){
      this.setState({ options: this.state.options.concat(sector) })
      return true;    
    }

    return false;
  }

  removeSector(sector){
    // can't use splice
    this.setState({
      options: _.filter(this.state.options, (option) => sector === option ? false: true)
    });
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
