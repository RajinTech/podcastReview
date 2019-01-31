import React, { Component } from 'react';
import TextField from '../components/TextField'
import RatingField from '../components/RatingField'
import { browserHistory } from 'react-router'
import ReviewFormContainer from './ReviewFormContainer'

class ReviewEditContainer extends ReviewFormContainer {
  constructor(props) {
    super(props)
    this.state = this.props.initialState
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = this.state

    fetch(`/reviews/${this.props.reviewId}`, {
      credentials: 'same-origin',
      method: 'PATCH',
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
      .then(response => {return response.json()})
      .then(body => {
        this.props.updateReview(body)
        this.props.onClickCancel()
      })
      .catch(error => console.error(`Failed to edit review: ${error.message}`));
  }

  render() {
    return(
      <div>
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
            label="Comment:"
            name="comment"
            onChange={this.handleTextChange}
            value={this.state.comment}
            />
          <input className="button" type="submit" value="Save"/>
          <button onClick={this.props.onClickCancel}>Discard</button>
        </form>
      </div>
    )
  }
}

export default ReviewEditContainer
