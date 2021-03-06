import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TopBar from './components/top_bar.js';
import MainContent from './components/main_content.js';
import _ from 'underscore';
import './assets/styles/main.css';

const API = "http://data.okfn.org/data/core/s-and-p-500-companies/r/constituents-financials.json";

class App extends Component {
  constructor(){
    super()
    this.state = {
      cachedSectors: null,
      cachedMarketCap: null,
      cachedCompanyList:null,
      companySize:0,
      highestMarketCap:0,
      options: []
    }
  }

  componentDidMount(){
    axios.get(API).then((response) => {
      
      let cache = {}, marketCache = {}, count = 0;

      response.data.forEach((company) => {

        // caching the sectors by storing them in a Hash Table will optimize rendering
        // Instead of having to iterate through n companies.
        // We will only have to iterate throught just N sectors
        let sector = company.Sector.toUpperCase();

        if(!cache[sector]){
          cache[sector] = [company];
          count += marketCache[sector] = +company['Market Cap'];
        } else {
          cache[sector].push(company)
          marketCache[sector] += +company['Market Cap'];
          count += +company['Market Cap'];
        }
      });


      this.setState({ 
        cachedSectors: cache,
        cachedMarketCap: marketCache,
        cachedCompanyList: response.data, 
        companySize: response.data.length,
        highestMarketCap: Math.round(count)
      });

    });
  }

  render(){
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

  // Helper Function
  addSector(sector){
    if(this.state.cachedSectors[sector]){
      let options = this.state.options.concat(sector);

      this.setState({
        highestMarketCap: this.calculateMarketCap(options),
        companySize: this.calculateSize(options),
        options
      })
      return true;    
    }

    return false;
  }

  // Helper Function
  calculateSize(options){
    let count = 0;
    _.each(options, (option) => {
      count+= this.state.cachedSectors[option].length
    })

    return count;
  }

  // Helper Function
  calculateMarketCap(options){
    let count = 0;
    if(options.length){
      _.each(options, (sector) => {
        count += this.state.cachedMarketCap[sector]
      });
    } else {
      _.each(this.state.cachedMarketCap, (sector) => {
        count += sector
      })
    }

    return Math.floor(count);
  }

  // Helper Function
  removeSector(sector){

    let options = _.filter(this.state.options, (option) => sector === option ? false: true);


    this.setState({
      highestMarketCap: this.calculateMarketCap(options),
      companySize: options.length ? this.calculateSize(options) : this.state.cachedCompanyList.length,
      options
    });
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
