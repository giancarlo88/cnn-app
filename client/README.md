## Gousto Product Search and Filtering App

### How to use this app

#### Installation

You can run this app from any computer by following these steps: 

1. Install a browser add-on to disable CORS blocking. The following are recommended: 
  - Chrome: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)
  - Firefox: 
  https://addons.mozilla.org/en-Gb/firefox/addon/cors-everywhere/
  - Safari: 
  Select 'Disable Cross-Origin restrictions from the 'Develop' menu. (If the 'Develop' menu isn't there, it can be enabled under 'Advanced' in Preferences)

2. Clone the source from the repository by entering the following commands in the terminal: 
```
git clone https://github.com/giancarlo88/gousto-app
cd gousto-app
npm install && npm start
```

#### Using the app

The app downloads a list of filters and products from the server as soon as the page loads.

To filter products from a specific category, click that category name. You can click the name again to turn the filter off. 

To search for a product, type something into search box. Only products with that text in their title or description are shown. (To show all the products again, delete the text.)

Clicking on a product title will show a description. You can show as many descriptions at a time as you like. If you want to hide the description, click the product title again. 

## How this solution works

This App has logical and presentational components.

Most of the logic surrounding App state is found in `views/ProductSearch`, whose state is the model of the app and whose methods collectively act as a controller. 

The filter data and product data is stored in local state so that the page can update after it's loaded. 

This component manages the following functions: 

1. Triggering functions to call the API as it's mounting, storing the results in state if the call is successful, and triggering a UI response if there's an error. 
2. Passing down filter data to the `Filters` container, and passing down product data to the `Products` container. 
3. Handling changes to the currently selected filter by updating the store and passing this information both the `Filters` and `Products` containers whenever it changes.
4. Handling changes to the input field by updating the store and passing this information to the `Products` container whenever it changes. 

The two containers simply take some props and rendering components based on them, by mapping them out.

The `containers/ProductFilters` component will always render all the filters passed to it by the filters prop. It will conditionally set the isSelected prop on a certain filter to true if that filter's title matches the selectedFilter prop. It passes the handleFilterClick function to each `Filter`—the returned function is passed the title of the filter as an argument. This allows the state of the parent component to be set as the title of that filter. 

The `containers/ProductList` maps through the products it receives as a prop using a few conditions:

  1. If there is query passed down as a prop, the product should render if the query is contained in either its title or the description. This is done simply using the native indexOf() function to compare strings.
  2. If there is a selectedFilter passed down as a prop, the product should render if one of its categories matches the selectedFilter. This is again achieved with indexOf(). An array of the product categories is generated with a simple function, which is extracted out so it can be reused elsewhere.

If a product is rendered, it is passed the title and description. 

Finally, there are components which are meant to simply display information based on the props they receive. They're all stateless, with the exception of components/Product. This has a state which dictates whether or not to show the description. Because multiple descriptions can be shown at once, it's much simpler to handle the state of showing/hiding descriptions at this level rather than in a parent container.

Presentational components which have different visual states (isSelected for example) use the prop to determine a CSS class. In a more complex app, a package such as class-names, or an alternative styling solution like CSS modules could be used instead.


