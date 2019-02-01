import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ReviewEditContainer from '../containers/ReviewEditContainer'

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: this.props.contents,
      userVote: this.props.userVote,
      totalVotes: this.props.totalVotes,
      editing: false
    }
    this.vote = this.vote.bind(this)
    this.upVote = this.upVote.bind(this)
    this.downVote = this.downVote.bind(this)
    this.startEditing = this.startEditing.bind(this)
    this.stopEditing = this.stopEditing.bind(this)
    this.updateContents = this.updateContents.bind(this)
  }

  vote(voteValue) {
    let vote = {
      'vote': {
        'value': voteValue
      }
    }
    fetch(`/api/v1/reviews/${this.props.id}/votes`, {
      'method': "post",
      'headers': {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      'body': JSON.stringify(vote)
    })
      .then(response => {
        if (response.ok) {
          return response;
        }
        else if (response.status == 403) {
          window.location.href = "/users/sign_in"
        }
        else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          userVote: response['user_vote'],
          totalVotes: response['total_votes']
        })
      })
      .catch(error => {
        console.error(`Error while attempting to vote: ${error.message}`)
      })
  }

  upVote() {
    if (this.state.userVote === 1) {
      this.vote(0)
    }
    else {
      this.vote(1)
    }
  }

  downVote() {
    if (this.state.userVote === -1) {
      this.vote(0)
    }
    else {
      this.vote(-1)
    }
  }

  startEditing() {
    this.setState({
      editing: true
    })
  }

  stopEditing() {
    this.setState({
      editing: false
    })
  }

  updateContents(newContents) {
    this.setState({
      contents: newContents,
      editing: false
    })
  }

  render() {
    let userFromEmail;
    if (this.state.contents.username == "") {
      userFromEmail = "Guy Reviewerson"
    }
    else {
      userFromEmail = this.state.contents.username.split("@")[0]
    }

    let editButtons = () => {
      if (this.props.editPermission) {
        return(
          <div>
            <button className="button form-submit" onClick={this.startEditing}>
              Edit
            </button>
            <button className="button form-submit" onClick={this.props.onClickDelete}>
              Delete
            </button>
          </div>
        )
      }
      else {
        return(null)
      }
    }

    let starRating = (rating) => {
      let filled_stars = "★".repeat(rating)
      let empty_stars = "☆".repeat(5-rating)
      return filled_stars + empty_stars
    }

    if (this.state.editing) {
      return (
        <ReviewEditContainer
          initialState={this.state.contents}
          onClickCancel={this.stopEditing}
          podcastId={this.props.podcastId}
          reviewId={this.props.id}
          updateReview={this.updateContents}
        />
      )
    }
    else {
      let totalValue = this.state.contents.binge_val +
        this.state.contents.educational_val +
        this.state.contents.entertainment_val

      return(
        <div className="review panel">
          <div className="row">
            <div className="small-12 medium-8 columns">
              <h2 className="title">{userFromEmail}</h2>
              <h3 className="review-body">{this.state.contents.comment}</h3>
              {editButtons()}
            </div>
            <div className="small-12 medium-4 columns panel ratings">
              <h3 className="stars">{starRating(this.state.contents.rating)}</h3>
              <h4>Binge Value: {this.state.contents.binge_val}</h4>
              <h4>Education Value: {this.state.contents.educational_val}</h4>
              <h4>Entertainment Value: {this.state.contents.entertainment_val}</h4>
            </div>
          </div>
          <div className="row">
            <div className="bar"></div>
          </div>
          <div className="row">
            <div className="small-6 columns">
              <button className="button vote form-submit" onClick={this.upVote}>Upvote</button>
              <button className="button vote form-submit" onClick={this.downVote}>Downvote</button>
            </div>
            <div className="small-6 columns">
              <h4>My vote: {this.state.userVote}</h4>
              <h4>Net Votes for this Review: {this.state.totalVotes}</h4>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ReviewTile;
