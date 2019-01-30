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
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ podcast: responseData });
        this.setState({ creators: this.state.podcast.creators.join(', ') });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    fetch(`/api/v1/reviews?podcast_id=${this.props.params.id}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ reviews: responseData })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let ratings = this.state.reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          podcastId={this.props.params.id}
          rating={review.rating}
          bingeVal={review.scores.binge}
          educationVal={review.scores.educational}
          entertainmentVal={review.scores.entertainment}
          totalScore={review.scores.binge+review.scores.educational+review.scores.entertainment}
          comment={review.comment}
          totalVotes={review.total_votes}
          userVote={review.user_vote}
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
