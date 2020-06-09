import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {

  const renderSushis = () => {
    return props.sushis.map((sushi) => {
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          handleEaten={props.removeSushi}
        />
      );
    });
  };

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton handleShowMore={props.handleShowMore}/>
      </div>
    </Fragment>
  );
};

export default SushiContainer;
