import React from 'react';
import { Link } from 'react-router';

const PodcastIndexTile = (props) => {
  let creators = props.creators
  let last_creator = creators.pop()
  let creators_str
  if (creators.length > 0) {
    creators_str = `By ${creators.join(", ")} and ${last_creator}`
  }
  else {
    creators_str = `By ${last_creator}`
  }

  return (
    <div className="panel small-4 columns content-tile">
      <div>
        <h1>
          <Link to={`/podcasts/${props.id}`}>{props.title}</Link>
        </h1>
        <h2>
          {creators_str}
        </h2>
      </div>
    </div>
  )
}

export default PodcastIndexTile
