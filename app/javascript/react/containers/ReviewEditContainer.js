import React, { Component } from 'react';
import TextField from '../components/TextField'
import RatingField from '../components/RatingField'
import { browserHistory } from 'react-router'
import ReviewFormContainer from './ReviewFormContainer'

class ReviewEditContainer extends ReviewFormContainer {
  constructor(props) {
    super(props)
    this.state = this.props.initialState
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("edit submitted (but not really)");
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
            value={this.state.bingeVal}
            />
          <RatingField
            label="Educational Value"
            name="educational_val"
            onChange={this.handleEducationalValChange}
            value={this.state.educationalVal}
            />
          <RatingField
            label="Entertainment Value"
            name="entertainment_val"
            onChange={this.handleEntertainmentValChange}
            value={this.state.entertainmentVal}
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
