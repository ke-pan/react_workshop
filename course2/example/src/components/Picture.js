import React from 'react'
const bigpic = require('../pics/big.png')
const smallpic = require('../pics/small.png')
const style = require('./Picture.css')

export default React.createClass({
  render() {
    return <div className={style.red}>
      <image src={bigpic} />
      <image src={smallpic} />
    </div>
  }
})
