import React from "react";
import NumberFormat from "react-number-format";

const Header = props => {
  return (
    <div >
       <h1 style={{fontSize: "2.2rem", fontWeight: "bold", textAlign: "center"}}>{props.car.name}</h1>
      <figure className="image is-400x400" >
        <img
          src={props.car.image}
          alt={props.car.name}
        />
      </figure>
      <br />
      <div className="carTitle" style={{display: "flex", justifyContent: "center"}}>
        <p style={{fontSize: "2rem", color: "green", fontWeight: "bold", marginRight: "1%"}}>Stock Price: </p>
        <NumberFormat
        style={{ fontSize: "2rem", color: "green", fontWeight: "bold"}}
        value={props.car.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" $"}
      />
      </div>
    </div>
  );
};

export default Header;
