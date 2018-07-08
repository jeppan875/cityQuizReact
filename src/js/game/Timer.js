
function Timer () {
  this._interval = ''
}

Timer.prototype.startTimer = function (timerElement, progressElement, time) {
  progressElement.max = parseInt(time)
  this._interval = setInterval(() => {
    time--
    if (time < 1) {
      let timeup = new window.CustomEvent('timeup')
      timerElement.dispatchEvent(timeup)
    } else if (time % 10 === 0) {
      let nextpic = new window.CustomEvent('nextpic')
      document.querySelector('#view').dispatchEvent(nextpic)
    }
    timerElement.innerText = parseInt(time)
    progressElement.value = parseInt(time)
  }, 1000)
}

Timer.prototype.getIntervalID = function () {
  return this._interval
}

Timer.prototype.stopTimer = function () {
  window.clearInterval(this._interval)
}

module.exports = Timer
