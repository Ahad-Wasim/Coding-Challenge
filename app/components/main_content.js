import React from 'react';
import OptionWrapper from './option_wrapper.js';
import TableWrapper from './table_wrapper.js';

const MainContent = () => {
  return (
    <section className="main-content clearfix">
      <OptionWrapper />
      <TableWrapper />
    </section>
  );
}

export default MainContent;
