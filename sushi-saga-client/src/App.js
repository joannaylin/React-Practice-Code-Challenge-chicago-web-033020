import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      hasEaten: [],
      showSushis: [],
      money: 100,
      perPage: 4,
      offset: 0
    }
  }
  
  componentDidMount() {
    fetch(API)
    .then(resp=>resp.json())
    .then(sushis=>{
      const slice = sushis.slice(this.state.offset, this.state.offset + this.state.perPage)
      this.setState({
        sushis: sushis,
        showSushis: slice,
        offset: this.state.offset + this.state.perPage
      })
    })
  }

  renderNextSushis = () => {
    const slice = this.state.sushis.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      sushis: this.state.sushis,
      showSushis: slice,
      offset: this.state.offset + this.state.perPage
    }, () => console.log(this.state.sushis, this.state.showSushis))  
  }

  removeSushi = (props) => {
    const updatedSushis = this.state.sushis.filter(sushi=> sushi.id !== props.id)
    const updatedEaten = [...this.state.hasEaten, props]
    const updatedMoney = this.state.money - props.price
    if (updatedMoney > 0) {
      this.setState({
        sushis: updatedSushis,
        hasEaten: updatedEaten,
        money: updatedMoney 
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} showSushis={this.state.showSushis} removeSushi={this.removeSushi} renderNextSushis={this.renderNextSushis}/>
        <Table hasEaten={this.state.hasEaten} money={this.state.money}/>
      </div>
    );
  }
}

export default App;