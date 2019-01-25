import React from 'react'
import { Router, Route, IndexRoute, Switch } from 'react-router';
import { createBrowserHistory } from 'history'
import PodcastIndexContainer from './containers/PodcastIndexContainer'
import PodcastShowContainer from './containers/PodcastShowContainer'

const App = props => {
  return(
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path='/' component={PodcastIndexContainer}/>
        <Route path='/podcasts/:id' component={PodcastShowContainer}/>
      </Switch>
    </Router>
  )
}

export default App
