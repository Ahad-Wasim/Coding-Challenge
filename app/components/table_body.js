import React from 'react';
import _ from 'underscore';
import CompanyRow from './company_row.js';

const TableBody = (props) => {
 
  let companyEntities;

  if(!props.options.length){
    companyEntities = _.map(props.cachedCompanyList, (company, id) => <CompanyRow key={id} company={company} />);
  } else {
    companyEntities = [];
    _.each(props.options, (option) => {
      _.each(props.cachedSectors[option], (company, id) => {
        companyEntities.push(<CompanyRow key={`${id}-${option}`} company={company} />);
      })
    })
  }

  return (
    <tbody>
      {companyEntities}
    </tbody>
  );
};

export default TableBody;
