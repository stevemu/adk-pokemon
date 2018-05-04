# Pokémon React App #

Using React, please build a Single Page Application according to the wireframes using [create-react-app](https://github.com/facebookincubator/create-react-app#creating-an-app) as a boilerplate. These wireframes are a guideline for main components and layout, but we want YOU to style as you'd like. Below we specify features that may require certain style changes, otherwise go nuts!

Please do not make any modifications to wireframes.

Spend no more than three hours on this assesment. Please don't stress out! It's okay if you do not finish every user story! To submit, either zip up and send back to Heather, or send a link to a publicly accessible repository to Heather. Do not submit a compiled application, ensure we can replicate your dev environment.

## Includes ##
* React via create-react-app (ejected)
* node-sass already installed (this is a tool we consistently use as a company)
* Redux already installed (this is a tool we consistently use as a company)

## Requirements ##
* Single page app -- no react-router required
* Proxy the API provided in the Resources section of this ReadMe
* Use [Redux](https://redux.js.org/docs/basics/UsageWithReact.html) at your discretion (not a requirement, but a plus if used appropriately)
* Import libraries (functionality is outlined in the Features section of this ReadMe): 
    * [Moment](momentjs.com/docs/)
    * [Recharts](http://recharts.org/#/en-US/examples/SimpleBarChart) or [amCharts](https://www.amcharts.com/demos/simple-column-chart/)
    * [Axios](https://github.com/axios/axios) (Our preferred HTTP client, fetch is fine too or any other you are more familiar with for this demo)
    * [Material UI](http://www.material-ui.com/#/components/auto-complete)

## Resources ##

* [API Documentation](http://pokebase.herokuapp.com/api)
* [React Documentation](https://github.com/facebookincubator/create-react-app#creating-an-app)
* [Redux Documentation](https://redux.js.org/docs/basics/UsageWithReact.html)
* [Recharts](http://recharts.org/)
* [amCharts](https://www.amcharts.com/)
* [Pokémon Types / Color Examples](http://www.pokemongodb.net/2016/04/pokemon-go-types.html)

# Please give the API a second to spin up when you first visit the page!

## Components & Features (User Stories) ##

* As a User, I want to be able to type a Pokémon's name in a search box and have the component show me suggestions of Pokémon in a dropdown selectable list. 
* As a User, when I select a Pokémon from the auto-suggest list I want to see that Pokémon's image, attack, defense, and type(s) in an InfoBox Component. 
    * I want to see a unique color indication (text color, background color, etc) for a specific type of Pokémon.
* As a User, when I select a Pokémon from the auto-suggest list I want to see that Pokémon's age (based on birthday timestamp) in the InfoBox Component. 
    * Hint: Use the Moment library 
* As a User, when I select a Pokémon from the auto-suggest list I want to see that Pokémon's basic statistics (attack, defense, stamina) in a BarChart Component.
    * X-axis: statistic name
    * Y-axis: value
    * If a value is >= 50, change the color of the bar to red. 
    * If a value is <50 & >=20, change the color of the bar to yellow. 
    * If a value is <20, change the color of the bar to grey.
* As a User, when I click on the Pokéball near the graph the data will toggle between basic statistics & moves
    * Move Data Graph: X-axis = move name, Y-axis = move power

## Show Off ##

These are not required functionalities, but a few examples to show off some advanced skills. 

* Responsiveness -- mobile and/or tablet
* Make the Pokéball using ONLY SCSS
* Make the Pokéball animate (rotate, bounce, grow/shrink, dealer's choice)
* Create a Middleware that triggers an easter egg
    * Intercept the Pokémon type and show an easter egg! 
    * Ex: If a fire Pokémon is selected, make the screen flash red. If an ice Pokémon is selected, overlay the page with snowflakes.
* Game-ify this App!
    * Add a Screen for a game & link to it from the original app. 
    * Give the User 2 random Pokémon by name.
    * Let the User select a sequence of 3 moves out of the total available moves for each Pokémon.
    * Battle the Pokémon... because that's what they do. 
    * Show the victorious and defeated based on the sum of the move power values and the defense of the opposing Pokémon; whoever hits defense = 0 first loses. 

### Brought to you by ###

* Matt Thompson
* Alyssa Wolejko