import React, { Fragment } from 'react'

const Table = (props) => {
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={x.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const emptyPlates = () => {
    return props.sushis.filter(sushi=> sushi.eaten === true)
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(emptyPlates())}
        </div>
      </div>
    </Fragment>
  )
}

export default Table