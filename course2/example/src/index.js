const React = require('react')
import {render} from 'react-dom'
import Picture from './components/Picture'


require.ensure(['./utils/log'], function(require){
  const log = require('./utils/log')
  log('hello webpack')
})
const App = React.createClass({
  render() {
    return <div>
      <h1 className='red'>Hello webpack!</h1>
      <Picture/>
    </div>
  }
})

render(<App/>, document.querySelector('.container'))
