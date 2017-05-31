import React, { Component } from 'react'
import axios from 'axios'

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
          tweets: data
        })
      )
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <div>
        Tweets go here.
      </div>
    )
  }
}

export default App
