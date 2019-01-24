import React, { Component } from 'react';

class PodcastShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {}
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return(
      <div>Hello</div>
    )
  }
}

export default PodcastShowContainer
