import React from 'react'
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history'
import PodcastIndexContainer from './containers/PodcastIndexContainer'
import PodcastShowContainer from './containers/PodcastShowContainer'

const App = props => {
  return(
    <Router history={createBrowserHistory()}>
      <div>
        <Route path='/' component={PodcastIndexContainer}/>
        <Route path='/podcasts/:id' component={PodcastShowContainer}/>
      </div>
    </Router>
  )
}

export default App
