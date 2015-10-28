var React = require('react');
var Bigpic = require('../pics/big.png')
var Smallpic = require('../pics/small.png')
var style = require('./Picture.css')

module.exports = React.createClass({
  render() {
    return <div className={style.red}>
      <img src={Bigpic} />
      <img src={Smallpic} />
    </div>
  }
})
