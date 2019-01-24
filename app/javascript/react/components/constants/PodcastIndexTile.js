import React from 'react';

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
      <h2 className="podcast-title">{props.title}</h2>
      {creators}
    </div>
  )
}

export default PodcastIndexTile
