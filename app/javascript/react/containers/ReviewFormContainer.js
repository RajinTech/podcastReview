import React, { Component } from 'react';
import TextField from '../components/TextField'

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      binge_val: null,
      educational_val: null,
      entertainment_val: null,
      comment: ""
    }
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
  }

  handleTextFieldChange(event) {
    let newComment = event.target.value
    this.setState({ comment: newComment })
    console.log(this.state.comment)
  }

  render(){
    return(
      <form className="panel">
        <TextField
          label="Comment"
          name="comment"
          onChange={this.handleTextFieldChange}
          value={this.state.comment}
          />
        <input className="button" type="submit" value="Submit"/>
      </form>
    )
  };
}
export default ReviewFormContainer;
