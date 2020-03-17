import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import clearFeatures from '../actions/clearFeatures';

const ClearFeature = () => {
    const {} = useSelector(state => state);
    const dispatch = useDispatch()
    
      dispatch({type: 'TEST'})
  return (
      <button className="button" onClick={clearFeatures} style={{backgroundColor: "#333", margin: "0"}}>CLEAR ALL</button>
  );
};

export default ClearFeature;
