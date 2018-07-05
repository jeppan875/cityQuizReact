import React from 'react'

export default class SelectGameType extends React.Component {
  render () {
    return (
      <form>
        <div id='continent'>
          <div>
            <input type='radio' class='option-input radio' id='five-questions' name='location' value='5' checked='checked' />
            <label for='five-questions'>Small</label>
          </div>
          <div>
            <input type='radio' class='option-input radio' id='ten-questions' name='location' value='10' />
            <label for='ten-questions'>Medium</label>
          </div>
          <div>
            <input type='radio' class='option-input radio' id='twenty-questions' name='location' value='20' />
            <label for='twenty-questions'>Grand</label>
          </div>
          <div>
            <input type='radio' class='option-input radio' id='hundred-points' name='location' value='30 100' />
            <label for='hundred-points'>100 points</label>
          </div>
          <div>
            <input type='radio' class='option-input radio' id='twohundred-points' name='location' value='30 200' />
            <label for='twohundred-points'>200 points</label>
          </div>
          <div>
            <input type='radio' class='option-input radio' id='threehundred-points' name='location' value='30 300' />
            <label for='threehundred-points'>300 points</label>
          </div>
        </div>
        <div id='btn'>
          <button type='submit' id='start' class='StandardButton'>Start</button>
        </div>
      </form>
    )
  }
}
