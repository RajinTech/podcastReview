import React from 'react';
import { Link } from 'react-router';
import LinkButton from './LinkButton'

const HomeButton = (props) => {
  return(
    <div>
      <LinkButton
        to="/"
        classes="back-button"
        text="Home"
      />
    </div>
  )
}

export default HomeButton
