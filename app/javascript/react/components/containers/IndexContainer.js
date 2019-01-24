import React, { Component } from 'react';
import PodcastIndexTile from '../constants/PodcastIndexTile'

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    }
  }

  render() {
    return(
      <PodcastIndexTile />
    )
  }
}

export default IndexContainer
