module.exports = {
  encodeApiKey: function(consumerKey, consumerSecret) {
    return new Buffer(
      encodeURIComponent(consumerKey) + ':' + encodeURIComponent(consumerSecret)
    ).toString('base64')
  }
}
