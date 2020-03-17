import React from "react";
import NumberFormat from "react-number-format";



const Total = props => {
  return (
    <div className="content" style={{margin: "0", display: "flex", justifyContent: "center", width: "100%"}}>
      <p style={{ fontSize: "1.8rem", color: "green", textAlign: "center", marginRight: "1%", fontWeight: "bold"}}>New Total: </p>
      <NumberFormat
        style={{ fontSize: "1.8rem", color: "green", fontWeight: "bold"}}
        value={props.car.price + props.additionalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" $"}
      />
    </div>
  );
};

export default Total;
