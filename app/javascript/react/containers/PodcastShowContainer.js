import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'
import { Link } from 'react-router';
class PodcastShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {},
      reviews: [],
      creators: ""
    }
    this.fetchReviews = this.fetchReviews.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
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
    this.fetchReviews()
  }

  fetchReviews() {
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
        console.log(responseData);
        this.setState({ reviews: responseData })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteReview(review_id) {
    fetch(`/reviews/${review_id}`, {
      'method': 'DELETE',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'review': { 'id': review_id }
      })
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body['successful']) {
          this.fetchReviews()
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let ratings = this.state.reviews.map(review => {
      let onClickDelete = () => {this.deleteReview(review.id)}

      let contents = {
        username: review.username,
        rating: review.rating,
        binge_val: review.scores.binge,
        educational_val: review.scores.educational,
        entertainment_val: review.scores.entertainment,
        comment: review.comment
      }

      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          podcastId={this.props.params.id}
          contents={contents}
          totalScore={review.scores.binge+review.scores.educational+review.scores.entertainment}
          totalVotes={review.total_votes}
          userVote={review.user_vote}
          editPermission={review.edit_permission}
          onClickDelete={onClickDelete}
        />
      )
    })

    return(
      <div>
        <div className="row-one"></div>
        <div className="row">
          <div className="panel show-header">
            <h1>{this.state.podcast.title}</h1>
            <h3>Creators: {this.state.creators}</h3>
            <h3>Description: {this.state.podcast.description}</h3>
            <h3>{this.state.podcast.url}</h3>
          </div>
          <div className="small-11 medium-5 large-2 panel new-review">
            <Link
              to={{pathname: `/podcasts/${this.props.params.id}/reviews/new`,
              state: { title: this.state.podcast.title }} }>
              Add a new review for {this.state.podcast.title}
            </Link>
          </div>
          <div className="bar"></div>
          <div>
            <div className="reviews-header">Reviews</div>
            <h3>{ratings}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default PodcastShowContainer
