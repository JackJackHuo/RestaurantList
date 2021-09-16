// Importing  modules from node_modules or Node.js built-in module
const express = require('express')
const exphbs = require('express-handlebars')
// Importing restaurants JSON file
const restaurants = require('./restaurant.json')
// create express server
const app = express()
// define port used for server
const port = 3000

// setting static files
app.use(express.static('public'))

// setting template engine
app.engine('handlebars' , exphbs({defaultLayout:'main'}))
app.set('view engine' , 'handlebars')

// routes setting
app.get('/' , (req , res) => {
  const restaurantList = restaurants.results
  res.render('index', { restaurantList: restaurantList})
})
app.get('/restaurants/:id' , (req , res) => {
  const restaurantList = restaurants.results
  const selectedId = +req.params.id
  const restaurant = restaurantList.find(restaurant => restaurant.id === selectedId)
  res.render('show', { restaurant: restaurant })
})
app.get('/search' , (req , res) => {
  const restaurantList = restaurants.results
  const keyword = req.query.keyword.toLowerCase().trim()
  const searchedRestaurants = restaurantList.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
  })

  console.log(searchedRestaurants)
  searchedRestaurants.length === 0 || keyword.length === 0 ? res.render('error', { keyword }) : res.render('search', { searchedRestaurants, keyword})
  
})

// start and listen on the Express server
app.listen(port , () => {
  console.log(`youre listening to http://localhost:${port}`)
})


