import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      eaten: [],
      money: 100,
      offset: 0,
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushis) =>
        this.setState({
          sushis: sushis,
        })
      );
  }

  renderFourSushis = () => {
    return this.state.sushis.slice(this.state.offset, this.state.offset + 4);
  };

  handleShowMore = (event) => {
    let newOffset = this.state.offset + 4;
    if (newOffset === this.state.sushis.length) {
      newOffset = 0
    }
    this.setState({
      offset: newOffset,
    });
  };

  removeSushi = (props) => {
    const updatedEaten = [...this.state.eaten, props]
    const updatedMoney = this.state.money - props.price;
    if (updatedMoney > 0) {
      this.setState({
        eaten: updatedEaten,
        money: updatedMoney,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.renderFourSushis()}
          removeSushi={this.removeSushi}
          handleShowMore={this.handleShowMore}
          eaten={this.state.eaten}
        />
        <Table money={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
