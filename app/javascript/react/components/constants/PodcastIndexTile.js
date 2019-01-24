import React from 'react';
import { Link } from 'react-router-dom';

const PodcastIndexTile = props => {
  let creators = props.creators.map((creator, index) => {
    return(
      <div key={index} className="podcast-detail">
        {creator}
      </div>
    )
  })

  return (
    <div>
      <Link to={`/podcast/${props.id}`} className="podcast-title">{props.title}</Link>
      {creators}
    </div>
  )
}

export default PodcastIndexTile
