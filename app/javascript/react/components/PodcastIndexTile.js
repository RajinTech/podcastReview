import React from 'react';
import { Link } from 'react-router';

const PodcastIndexTile = props => {
  let creators = props.creators.map((creator, index) => {
    return(
      <div key={index} className="podcast-detail">
        {creator}
      </div>
    )
  })

  return (
    <div className="panel small-4 columns">
      <div>
        <Link to={`/podcasts/${props.id}`} className="podcast-title">{props.title}</Link>
        {creators}
      </div>
    </div>
  )
}

export default PodcastIndexTile
