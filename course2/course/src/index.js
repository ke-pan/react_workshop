var React = require('react');
import {render} from 'react-dom'
var Picture = require('./components/Picture')

const App = React.createClass({
  render() {
    return <div>
      <h1 className="red"> Hello webpack </h1>
      <Picture />
    </div>
  }
})

render(<App />, document.querySelector('.container'))
