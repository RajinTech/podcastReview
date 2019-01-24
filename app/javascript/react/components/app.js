import React from 'react'
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history'
import IndexContainer from './containers/IndexContainer'

const App = props => {
  return(
    <Router history={createBrowserHistory()}>
      <Route path='/' component={IndexContainer}/>
    </Router>
  )
}

export default App
