import React from 'react'
import './Tweet.css'

const Tweet = props => {
  const { text, url, user } = props.data
  return (
    <ul className="tweet">
      <a className="tweet__link" about="_blank" href={url.url}>
        <span className="tweet__text">{text}</span>
        <span className="tweet__user"> @{user}</span>
      </a>
    </ul>
  )
}

export default Tweet
