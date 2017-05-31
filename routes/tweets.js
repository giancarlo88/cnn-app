var express = require('express')
var router = express.Router()
var request = require('request')
var utils = require('../utils/utils')
var constants = require('../config/apiConstants.js')
var rp = require('request-promise')

router.get('/', (req, res, next) => {
  authenticate()
    .then(access_token => fetchTweets(access_token))
    .then(results => {
      const tweets = results.map(item => ({
        url: item.entities.urls[0],
        text: item.text,
        user: item.user.screen_name
      }))
      return res.send(tweets)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send('Error')
    })
})

const authenticate = () => {
  const apiKey = utils.encodeApiKey(
    constants.CONSUMER_KEY,
    constants.CONSUMER_SECRET
  )
  return rp({
    url: 'https://api.twitter.com/oauth2/token',
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + apiKey,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
  })
    .then(response => {
      const { access_token } = JSON.parse(response)
      return access_token
    })
    .catch(err => err)
}

const fetchTweets = token => {
  return rp({
    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cnnbrk&count=10',
    headers: {
      Authorization: 'Bearer ' + token
    },
    method: 'GET'
  })
    .then(response => JSON.parse(response))
    .catch(err => err)
}

module.exports = router
