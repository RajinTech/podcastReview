import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PodcastIndexContainer from './containers/PodcastIndexContainer'
import PodcastShowContainer from './containers/PodcastShowContainer'
import ReviewFormContainer from './containers/ReviewFormContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={PodcastIndexContainer}/>
      <Route path='/podcasts/:id' component={PodcastShowContainer}/>
      <Route path='/podcasts/:id/reviews/new' component={ReviewFormContainer}/>
    </Router>
  )
}

export default App
