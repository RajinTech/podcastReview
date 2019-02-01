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
        <div className="row-one"></div>
        <div className="row">
          <LinkButton
            to="/podcasts/new"
            classes="panel new-podcast fade-in"
            text="Add a New Podcast"
          />
        </div>
        <div className="row">
          {podcasts}
        </div>
      </div>
    )
  }
}

export default PodcastIndexContainer
