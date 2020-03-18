import React from 'react';

const AddedFeature = props => {
  return (
    <li style={{fontSize: "1.1rem"}}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removeFeature(props.feature)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
