# CNN Twitter App

To deploy the app locally, follow these instructions: 

1. Run the following commands in the terminal
```
$ git clone https://github.com/giancarlo88/cnn-app
$ cd cnn-app && npm install 
$ cd client && npm install
```

This will install both the client-side and server-side dependencies. 

2. Add an apiConstants.js file in the config folder that includes your client API key and API client secret from Twitter. There is an apiConstants.schema.js that functions as a model for this file. 

3. Run the build locally. The simplest way to do this is using webpack-dev-middleware. Simply run `npm start` in the cnn-app folder and the app will be accessible by navigating to [http://localhost:30000/cnnbrk-tweets](http://localhost:30000/cnnbrk-tweets)

### Running using a production build

As an alternative, an instance of the app can be launched using static assets rather than webpack. To do that, follow these instructions: 

1. Navigate to the client folder (`cd cnn-app/client`)
2. Create a production build by running `npm run build`. This will create a minified production copy of the client-side code. 
3. Navigate back to the root folder (`cd ..`) and run the server in a production environment with `npm run production`

