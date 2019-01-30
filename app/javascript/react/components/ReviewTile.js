import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userVote: this.props.userVote,
      totalVotes: this.props.totalVotes
    }
    this.vote = this.vote.bind(this)
    this.upVote = this.upVote.bind(this)
    this.downVote = this.downVote.bind(this)
  }

  vote(voteValue) {
    let vote = {
      'vote': {
        'value': voteValue
      }
    }

    fetch(`/reviews/${this.props.id}/votes`, {
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

  render() {
    return(
      <div className="panel">
        <div>
          <button onClick={this.upVote}>Upvote</button>
          <button onClick={this.downVote}>Downvote</button>
          <h2>User Voted: {this.state.userVote}</h2>
          <h2>Vote Total: {this.state.totalVotes}</h2>
          <h3>Rating: {this.props.rating}</h3>
          <h3>Binge Value: {this.props.bingeVal}</h3>
          <h3>Education Value: {this.props.educationVal}</h3>
          <h3>Entertainment Value: {this.props.entertainmentVal}</h3>
          <h3>Overall Value: {this.props.totalScore}</h3>
          <h3>Comment: {this.props.comment}</h3>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
