import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

class PodcastShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {},
      reviews: [],
      creators: ""
    }
  }

  componentDidMount() {
    fetch(`/api/v1/podcasts/${this.props.params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ podcast: responseData });
        this.setState({ creators: this.state.podcast.creators.join(', ') });
      })
      .catch((error) => {
        throw error
      })
    fetch(`/api/v1/reviews/${this.props.params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ reviews: responseData })
      })
      .catch((error) => {
        throw error
      })
  }

  render() {

    let ratings = this.state.reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          rating={review.rating}
          bingeVal={review.binge_val}
          educationVal={review.educational_val}
          entertainmentVal={review.entertainment_val}
          comment={review.comment}
        />
      )
    })

    return(
      <div>
        <div className="rowOne"></div>
        <div className="row">
          <div className="panel">
            <h1>{this.state.podcast.title}</h1>
            <h3>Creators: {this.state.creators}</h3>
            <h3>Description: {this.state.podcast.description}</h3>
            <h3>URL: {this.state.podcast.url}</h3>
          </div>
          <div>
            <h1>Reviews</h1>
            <h3>{ratings}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default PodcastShowContainer
