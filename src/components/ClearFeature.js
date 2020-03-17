import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import clearFeatures from '../actions/clearFeatures';

const ClearFeature = () => {
    const {} = useSelector(state => state);
    const dispatch = useDispatch()
    
      dispatch({type: 'CLEAR_FEATURES'})
  return (
      <button className="button" onClick={clearFeatures} style={{backgroundColor: "red", margin: "0", padding: "5%"}}>CLEAR ALL</button>
  );
};

export default ClearFeature;
