const citiesLib = require('./cities')
const cities = citiesLib.cities
const skylineLib = require('./skylineLib')
const skyline = skylineLib.skylineLib

const levels = {
  1: {
    getMultipic () {
      let europe = Object.keys(cities.europe).slice(0, 5)
      let northAmerica = Object.keys(cities.north_america).slice(0, 2)
      let southAmerica = Object.keys(cities.south_america).slice(0, 1)
      let asia = Object.keys(cities.asia).slice(0, 2)
      return europe.concat(northAmerica, southAmerica, asia)
    },
    getSkyline () {
      return Object.keys(skyline).slice(0, 4)
    }
  },
  2: {
    getMultipic () {
      let europe = Object.keys(cities.europe).slice(0, 10)
      let northAmerica = Object.keys(cities.north_america).slice(0, 4)
      let southAmerica = Object.keys(cities.south_america).slice(0, 2)
      let asia = Object.keys(cities.asia).slice(0, 4)
      return europe.concat(northAmerica, southAmerica, asia)
    },
    getSkyline () {
      return Object.keys(skyline).slice(0, 7)
    }
  }
}

module.exports = {
  levels
}
