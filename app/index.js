import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      columns: ["Name", "Sector", "MarketCap"]
    }
  }

  componentDidMount(){

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
              <input className="searchBar" type="text" placeholder="ex. engineering" />
            </div>

            <div className="tags">
              <p>Engineering</p> <span className="close">X</span>
            </div>
          </section>

          <section className="right table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sector</th>
                  <th>Market</th>
                </tr>
              </thead>


              <tbody>
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
