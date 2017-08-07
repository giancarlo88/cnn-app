import axios from 'axios'

export const getTweets = () => {
  return axios
      .get('/api/tweets')
      .then(data => data)
    .catch(err => console.warn(err))
}
