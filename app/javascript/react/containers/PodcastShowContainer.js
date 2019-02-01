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
        // console.log(responseData);
        this.setState({ reviews: responseData })
        // console.log(this.state);
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
    let totalRatingPoints = 0;
    let averageRating;
    this.state.reviews.forEach(revew => {
      totalRatingPoints += revew.rating
    })
    if (totalRatingPoints === 0) {
      averageRating = "N/A"
    }
    else {
      averageRating = parseFloat(totalRatingPoints/(this.state.reviews.length)).toFixed(2)
    }

    let sortedReviews = this.state.reviews.sort((a, b) => b.total_votes - a.total_votes)
    console.log(sortedReviews);

    let reviewsHeader;

    let ratings = sortedReviews.map(review => {
      let onClickDelete = () => {this.deleteReview(review.id)}

      let contents = {
        username: review.username,
        rating: review.rating,
        binge_val: review.scores.binge,
        educational_val: review.scores.educational,
        entertainment_val: review.scores.entertainment,
        comment: review.comment
      }

      reviewsHeader = "Reviews"

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
            <div className="avg-rating">Average rating: {averageRating}</div>
            <div className="show-details">Creators: {this.state.creators}</div>
            <div className="show-details">Description: {this.state.podcast.description}</div>
            <div className="show-link"><a href={this.state.podcast.url} target="_blank">{this.state.podcast.url}</a></div>
          </div>
          <div className="small-11 medium-5 large-2 panel new-review">
            <Link
              to={{pathname: `/podcasts/${this.props.params.id}/reviews/new`,
              state: { title: this.state.podcast.title }} }>
              Add a new review for {this.state.podcast.title}
            </Link>
          </div>
          <div>
            <div className="reviews-header">{reviewsHeader}</div>
            <h3>{ratings}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default PodcastShowContainer
