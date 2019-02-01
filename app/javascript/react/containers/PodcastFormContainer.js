import React, { Component } from 'react';
import TextField from '../components/TextField';
import TextTile from '../components/TextTile';
import { browserHistory } from 'react-router'

class PodcastFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      creatorOne: "",
      creatorTwo: "",
      creatorThree: "",
      url: "",
      description: ""
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCreatorOneChange = this.handleCreatorOneChange.bind(this)
    this.handleCreatorTwoChange = this.handleCreatorTwoChange.bind(this)
    this.handleCreatorThreeChange = this.handleCreatorThreeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(event) {
    let newTitle = event.target.value
    this.setState({ title: newTitle })
  }

  handleCreatorOneChange(event) {
    let newCreator = event.target.value
    this.setState({ creatorOne: newCreator })
  }

  handleCreatorTwoChange(event) {
    let newCreator = event.target.value
    this.setState({ creatorTwo: newCreator })
  }

  handleCreatorThreeChange(event) {
    let newCreator = event.target.value
    this.setState({ creatorThree: newCreator })
  }

  handleUrlChange(event) {
    let newUrl = event.target.value
    this.setState({ url: newUrl })
  }

  handleDescriptionChange(event) {
    let newDescription = event.target.value
    this.setState({ description: newDescription })
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayload = {
      podcast: this.state
    };
    fetch('/podcasts', {
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
        browserHistory.push(``);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div className="row">
        <div className="row-one"></div>
        <div className="form-header">Add a New Podcast</div>
        <form onSubmit={this.handleSubmit} className="panel">
          <TextTile
            label="Podcast Title"
            name="podcastTitle"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
          <TextTile
            label="Podcast Creator 1"
            name="podcastCreatorOne"
            onChange={this.handleCreatorOneChange}
            value={this.state.creatorOne}
          />
          <TextTile
            label="Podcast Creator 2"
            name="podcastCreatorTwo"
            onChange={this.handleCreatorTwoChange}
            value={this.state.creatorTwo}
          />
          <TextTile
            label="Podcast Creator 3"
            name="podcastCreatorThree"
            onChange={this.handleCreatorThreeChange}
            value={this.state.creatorThree}
          />
          <TextTile
            label="URL"
            name="url"
            onChange={this.handleUrlChange}
            value={this.state.url}
          />
          <TextField
            label="Description"
            name="description"
            onChange={this.handleDescriptionChange}
            value={this.state.description}
            />
          <input className="button form-submit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default PodcastFormContainer
