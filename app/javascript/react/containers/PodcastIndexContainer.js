import React, { Component } from 'react';
import PodcastIndexTile from '../components/PodcastIndexTile'

class PodcastIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/podcasts.json")
      .then((response) => response.json())
      .then((responseData) => {
        // debugger
        this.setState({podcasts: responseData})
      })
      .catch((error) => {
        throw error
      })
  }

  render() {
    let podcasts = this.state.podcasts.map((podcast) => {
      return (
        <PodcastIndexTile
          key={podcast.id}
          id={podcast.id}
          title={podcast.title}
          creators={podcast.creators}
        />
      )
    })

    return(
      <div>
        {podcasts}
      </div>
    )
  }
}

export default PodcastIndexContainer
