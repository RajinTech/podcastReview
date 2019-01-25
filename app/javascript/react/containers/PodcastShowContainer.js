import React, { Component } from 'react';

class PodcastShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/podcasts/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ podcast: responseData })
      })
      .catch((error) => {
        throw error
      })
  }

  render() {
    return(
      <div>
        <h1>{this.state.podcast.title}</h1>
        <h3>Creators: {this.state.podcast.creators}</h3>
        <h3>Description: {this.state.podcast.description}</h3>
        <h3>URL: {this.state.podcast.url}</h3>
        <h3>Availability: {this.state.podcast.availability}</h3>
      </div>
    )
  }
}

export default PodcastShowContainer
