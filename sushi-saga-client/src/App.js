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
      money: 100,
      offset: 0,
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushis) => 
        this.setState({
          sushis: sushis.map(sushi=> ({...sushi, eaten: false})),
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

  removeSushi = (sushi) => {
    if (sushi.price <= this.state.money) {
      const updatedMoney = this.state.money - sushi.price;
      const updatedSushis = this.state.sushis.map(sushiObj=> {
        return sushiObj.id === sushi.id ? {...sushiObj, eaten: true} : sushiObj
      } )
      this.setState({
        money: updatedMoney,
        sushis: updatedSushis
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
        />
        <Table money={this.state.money} sushis={this.state.sushis} />
      </div>
    );
  }
}

export default App;
