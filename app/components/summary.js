import React from 'react';

const Summary = (props) => {
  return (
    <div className="summary">
      <p className="stat-label">Company Count</p>
      <p><strong>{props.companySize}</strong></p>
      <p className="stat-label">Total Sum</p>
      <p><strong>{props.highestMarketCap}</strong></p>
    </div>
  );
}

export default Summary;
