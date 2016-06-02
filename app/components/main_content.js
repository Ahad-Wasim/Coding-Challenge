import React from 'react';
import OptionWrapper from './option_wrapper.js';
import TableWrapper from './table_wrapper.js';

const MainContent = (props) => {
  return (
    <section className="main-content clearfix">
      <OptionWrapper 
        addSector={props.addSector}
        removeSector={props.removeSector}
        cachedMarketCap={props.cachedMarketCap}
        options={props.companyData.options}
        companySize={props.companyData.companySize}
        highestMarketCap={props.companyData.highestMarketCap}
      />


      <TableWrapper 
        options={props.companyData.options}
        cachedSectors={props.companyData.cachedSectors}
        cachedCompanyList={props.companyData.cachedCompanyList}
      />
    </section>
  );
}

export default MainContent;
