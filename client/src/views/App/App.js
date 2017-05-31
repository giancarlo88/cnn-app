import React, { Component } from 'react'
import Tweet from '../../components/Tweet/Tweet'
import axios from 'axios'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoaded: false,
      tweets: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/tweets')
      .then(data =>
        this.setState({
          isLoaded: true,
          tweets: data.data
        })
      )
      .catch(err => console.warn(err))
  }

  render() {
    const { isLoaded, tweets } = this.state
    return (
      <div className="app">
        <li className="tweet-list">
          {isLoaded &&
            tweets.map((tweet, index) => {
              return <Tweet key={index} data={tweet} />
            })}
        </li>
      </div>
    )
  }
}

export default App
