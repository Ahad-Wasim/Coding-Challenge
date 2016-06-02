import React from 'react';
import OptionWrapper from './option_wrapper.js';
import TableWrapper from './table_wrapper.js';

const MainContent = (props) => {
  return (
    <section className="main-content clearfix">
      <OptionWrapper />
      <TableWrapper 
        options={props.companyData.options}
        cachedSectors={props.companyData.cachedSectors}
        cachedCompanyList={props.companyData.cachedCompanyList}
      />
    </section>
  );
}

export default MainContent;
