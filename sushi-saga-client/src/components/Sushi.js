import React, { Fragment } from "react";

const Sushi = (props) => {
  const {name, img_url, price, eaten} = props.sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.handleEaten(props.sushi)}>
        {eaten ? null : <img src={img_url} width="100%" alt="sushi pic"/> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
