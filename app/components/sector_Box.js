import React from 'react';
import Tags from './tags.js';
import _ from 'underscore';

const SectorBox = (props) => {

  const renderTags = (options) => {
    return _.map(options, (option) => {
      return <Tags removeSector={props.removeSector} key={option} optionName={option} />
    })
  }

  return (
    <div className="sectorBox">
      { props.options.length ? renderTags(props.options) : void 0 }
    </div>
  );
};

export default SectorBox;
