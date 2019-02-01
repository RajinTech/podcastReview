import React, { Component } from 'react';
import TextField from '../components/TextField'
import RatingField from '../components/RatingField'
import { browserHistory } from 'react-router'

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      binge_val: 5,
      educational_val: 5,
      entertainment_val: 5,
      comment: ""
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleEducationalValChange = this.handleEducationalValChange.bind(this)
    this.handleEntertainmentValChange = this.handleEntertainmentValChange.bind(this)
    this.handleBingeValChange = this.handleBingeValChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextChange(event) {
    let newComment = event.target.value
    this.setState({ comment: newComment })
  }
  handleRatingChange(event) {
    let newRating = event.target.value
    this.setState({ rating: newRating })
  }
  handleBingeValChange(event) {
    let newBingeVal = event.target.value
    this.setState({ binge_val: newBingeVal })
  }
  handleEducationalValChange(event) {
    let newEducationVal = event.target.value
    this.setState({ educational_val: newEducationVal })
  }
  handleEntertainmentValChange(event) {
    let newEntertainmentVal = event.target.value
    this.setState({ entertainment_val: newEntertainmentVal })
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      review: this.state
    };
    formPayload["review"]["podcast_id"] = parseInt(this.props.params.id);
    formPayload["review"]["user_id"] = 1
    fetch(`/podcasts/${this.props.params.id}/reviews`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
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
          browserHistory.push(`podcasts/${this.props.params.id}`);
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div className="row">
        <br></br>
        <div className="form-header">Submit a New Review for {this.props.location.state.title}</div>
        <form onSubmit={this.handleSubmit} className="panel">

          <RatingField
            label="Overall Rating"
            name="rating"
            onChange={this.handleRatingChange}
            value={this.state.rating}
            />
          <RatingField
            label="Bingeability"
            name="binge_val"
            onChange={this.handleBingeValChange}
            value={this.state.binge_val}
            />
          <RatingField
            label="Educational Value"
            name="educational_val"
            onChange={this.handleEducationalValChange}
            value={this.state.educational_val}
            />
          <RatingField
            label="Entertainment Value"
            name="entertainment_val"
            onChange={this.handleEntertainmentValChange}
            value={this.state.entertainment_val}
            />
          <TextField
            label="Comment"
            name="comment"
            onChange={this.handleTextChange}
            value={this.state.comment}
            />
          <input className="button form-submit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  };
}
export default ReviewFormContainer;
