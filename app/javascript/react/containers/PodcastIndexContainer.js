import React, { Component } from 'react';
import PodcastIndexTile from '../components/PodcastIndexTile'
import { Link } from 'react-router';

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
        <div className="button secondary">
          <Link to={'/podcasts/new'}>Add a New Podcast</Link>
        </div>
        <div>
          {podcasts}
        </div>
      </div>
    )
  }
}

export default PodcastIndexContainer
