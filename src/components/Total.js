import React from "react";
import NumberFormat from "react-number-format";



const Total = props => {
  return (
    <div className="content" style={{margin: "0", display: "flex", flexDirection: "column", textAlign: "center"}}>
      <p style={{ fontSize: "1.8rem", color: "green", textAlign: "center", margin: "0"}}>New Total: </p>
      <NumberFormat
        style={{ fontSize: "1.8rem", color: "green"}}
        value={props.car.price + props.additionalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" $"}
      />
    </div>
  );
};

export default Total;
