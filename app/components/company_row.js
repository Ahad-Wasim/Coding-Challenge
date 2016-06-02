import React from 'react';


const CompanyRow = (props) => {
  return (
    <tr>
      <td>{props.company.Name}</td>
      <td>{props.company.Sector}</td>
      <td>{props.company['Market Cap']}</td>
    </tr>
  );
}


export default CompanyRow;
