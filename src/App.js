import React, { useEffect } from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import ClearFeatures from "./components/ClearFeatures";

import { connect, useSelector, useDispatch } from "react-redux";

import { addFeature } from "./actions/addFeature";
import { removeFeature } from "./actions/removeFeature";


const App = props => {
  //move to reducer file (initial state)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
      </div>
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
        <ClearFeatures/>
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addFeature={props.addFeature}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
