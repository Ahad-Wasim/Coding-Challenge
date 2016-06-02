import React from 'react';
import SearchBar from './search_bar.js';
import SectorBox from './sector_box.js';
import Summary from './summary.js';




const OptionWrapper = (props) => {
  return (
    <section className="left option-wrapper">
      <SearchBar addSector={props.addSector} />
      <SectorBox options={props.options} removeSector={props.removeSector} />
      <Summary
        options={props.options}
        companySize={props.companySize} 
        highestMarketCap={props.highestMarketCap} 
      />
    </section>
  );
}


export default OptionWrapper;


