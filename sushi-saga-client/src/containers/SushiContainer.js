import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {

  const renderSushis = () => {
    return props.showSushis.map((sushi) => {
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          handleEaten={props.removeSushi}
          isAvailable={props.sushis.includes(sushi)}
        />
      );
    });
  };

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton renderNextSushis={props.renderNextSushis}/>
      </div>
    </Fragment>
  );
};

export default SushiContainer;
