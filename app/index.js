import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './assets/styles/main.css';

const API = "http://data.okfn.org/data/core/s-and-p-500-companies/r/constituents-financials.json";

class App extends Component {
  constructor(){
    super()
    this.state = {
      columns: ["Name", "Sector", "MarketCap"]
    }
  }

  componentDidMount(){
    axios.get(API)
      .then(function(response){
        var cache = {};
        response.data.forEach((obj)=> {
          if(!cache.hasOwnProperty(obj.Sector)){
            cache[obj.Sector] = true
          }
        });
        console.log(cache);
        console.log(Object.keys(cache).length);
      });
  }

  render(){
    return (
      <div>

        <section className="top-bar">
          <div id="logo">
            <img src="https://www.qsensei.com/site/wp-content/themes/qsensei/assets/QS_Logo_white.png" />
          </div>
        </section>


        <section className="main-content clearfix">

          <section className="left option-wrapper">
            <div className="searchBar-wrapper">
              <input className="searchBar" type="text" placeholder="ex: engineering" />
            </div>

            <div className="sectorBox">
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
              <div className="tags">
                <p>Engineering</p> <span className="close">X</span>
              </div>
            </div>


            <div className="summary">
              <p><span>Company Count:</span>24</p>
              <p><span>Sum:</span>35.103</p>
            </div>



          </section>

          <section className="right table-wrapper">
            
            <table id="companyData">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sector</th>
                  <th>Market Cap</th>
                </tr>
              </thead>


              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table> 
          </section>

        </section>

      



      <div>
       
        
      </div>

    </div>


    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
