import Skyline from './Skyline'
import MultiPic from './MultiPic'
const citiesLib = require('./lib/cities')
const skylineLib = require('./lib/skylineLib')
const cities = citiesLib.cities
class QuizGame {
  constructor (size, maxPoints, multiplayer, questionsArr) {
    if (!multiplayer) {
      this.size = size + size * 0.4
      let citiesCount = size
      this.maxPoints = maxPoints
      let cities = this.getCities(citiesCount)
      this.cities = cities
      let skylines = this.getSkyline(size * 0.4)
      this.skylines = skylines
      this.currentCount = 0
      this.questions = this.questions(citiesCount, cities, skylines)
      this.score = 0
      this.answers = []
    } else {
      this.size = size
      this.currentCount = 0
      this.questions = this.multiplayerJoiner(questionsArr, size)
    }
  }
  multiplayerJoiner (questionsArr, size) {
    let arr = []
    for (let i = 0; i < size; i++) {
      if (questionsArr[i].type === 'question') {
        console.log('que')
        arr.push(new MultiPic(questionsArr[i].rightAnswer, true, questionsArr[i].alternatives, questionsArr[i].paths))
      }
      if (questionsArr[i].type === 'skyline') {
        console.log('sky')
        arr.push(new Skyline(questionsArr[i].rightAnswer, true, questionsArr[i].alternatives, questionsArr[i].paths))
      }
    }
    return arr
  }
  
  questions (size, cities, skylines) {
    let arr = []
    for (let i = 0; i < size; i++) {
      arr.push(new MultiPic(cities[i]))
    }
    for (let i = 0; i < size * 0.4; i++) {
      arr.push(new Skyline(skylines[i]))
    }
    this.shuffleCities(arr)
    return arr
  }
  
  getCities (nr) {
    let arr
    let europe = Object.keys(cities.europe)
    let northAmerica = Object.keys(cities.north_america)
    let southAmerica = Object.keys(cities.south_america)
    let asia = Object.keys(cities.asia)
    arr = europe.concat(northAmerica, southAmerica, asia)
    this.shuffleCities(arr)
    return arr.slice(0, nr)
  }
  
  getSkyline (nr) {
    let skylines = Object.keys(skylineLib.skylineLib)
    this.shuffleCities(skylines)
    return skylines.slice(0, nr)
  }

  shuffleCities (array) {
    if (!Array.isArray(array)) {
      throw new TypeError('The passed argument is not an array.')
    }
    let m = array.length
    let t
    let i
    while (m) {
      i = Math.floor(Math.random() * m--)
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }
    return array
  }
}
export default QuizGame
  