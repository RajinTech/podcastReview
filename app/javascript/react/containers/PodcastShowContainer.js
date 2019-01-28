import React, { Component } from 'react';

class PodcastShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/podcasts/${this.props.params.id}`)
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
        <div className="row-one"></div>
        <div className="row">
          <div className="panel">
            <h1><a href={this.state.podcast.url} target="_blank">{this.state.podcast.title}</a></h1>
            <h3>Creators: {this.state.podcast.creators}</h3>
            <h3>Description: {this.state.podcast.description}</h3>
            <h3>Availability: {this.state.podcast.availability}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default PodcastShowContainer
