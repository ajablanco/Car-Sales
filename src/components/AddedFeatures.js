import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6 style={{fontSize: "2rem", textAlign: "center"}}>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p style={{textAlign: "center"}}>Select an additional feature.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
