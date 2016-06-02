import React from 'react';
import SearchBar from './search_bar.js';
import SectorBox from './sector_box.js';
import Summary from './summary.js';


const OptionWrapper = () => {
  return (
    <section className="left option-wrapper">
      <SearchBar />
      <SectorBox />
      <Summary />
    </section>
  );
}


export default OptionWrapper;


