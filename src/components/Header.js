import React from "react";

const Header = props => {
  return (
    <div >
      <figure className="image is-400x400" >
        <img
          src={props.car.image}
          alt={props.car.name}
        />
      </figure>
      <br />
      <div className="carTitle" style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
        <h2 style={{fontSize: "2rem"}}>{props.car.name}</h2>
        <p style={{fontSize: "1.8rem", color: "green"}}>Stock Price: ${props.car.price}</p>
      </div>
    </div>
  );
};

export default Header;
