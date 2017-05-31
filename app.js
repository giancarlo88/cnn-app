var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./config/webpack.dev.config')

var tweets = require('./routes/tweets')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'client', 'public')))

var compiler = webpack(config)

if (app.get('env') === 'development') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      }
    })
  )

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log
    })
  )
}

if (app.get('env') === 'production') {
  console.log('a')
  app.use(
    '/cnnbrk-tweets',
    express.static(path.join(__dirname, 'client', 'build'))
  )

  app.listen(30000, () => {
    console.log('listening on 30000')
  })
}
app.use('/api/tweets', tweets)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
