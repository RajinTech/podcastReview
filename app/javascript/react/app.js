import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PodcastIndexContainer from './containers/PodcastIndexContainer'
import PodcastShowContainer from './containers/PodcastShowContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={PodcastIndexContainer}/>
      <Route path='/podcasts/:id' component={PodcastShowContainer}/>
    </Router>
  )
}

export default App
