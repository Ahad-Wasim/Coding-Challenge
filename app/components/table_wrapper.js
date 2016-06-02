import React from 'react';
import TableBody from './table_body.js';

const TableWrapper =  () => {
  return (
    <section className="right table-wrapper">
      
      <table id="companyData">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sector</th>
            <th>Market Cap</th>
          </tr>
        </thead>

        <TableBody />
        
      </table> 
    </section> 
  );
}

export default TableWrapper;
