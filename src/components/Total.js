import React from 'react';

const Total = props => {
  return (
    <div className="content" >
      <h4 style={{fontSize: "2rem", color: "green"}}>New Total: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
