import React from 'react'

export default class Question extends React.Component {
  render () {
    console.log(this.props.val)
    return (
      <div id='quizDiv' className='ripple'>
        <div id='viewDiv'>
          <p id='timer'>''</p>
          <img id='view' alt='' />
        </div>
        <progress max='30' />
        <p id='pquestion' />
        <div id='quiz'>
          <div id='question'>
            <div>
              <input type='radio' id='q1' className='option-input radio' name='answer' />
              <label htmlFor='q1' id='l1'>''</label>
            </div>
            <div>
              <input type='radio' id='q2' className='option-input radio' name='answer' />
              <label htmlFor='q2' id='l2'>''</label>
            </div>
            <div>
              <input type='radio' id='q3' className='option-input radio' name='answer' />
              <label htmlFor='q3' id='l3'>''</label>
            </div>
            <div>
              <input type='radio' id='q4' className='option-input radio' name='answer' />
              <label htmlFor='q4' id='l4'>''</label>
            </div>
          </div>
          <div id='btn'>
            <button type='submit' id='send' className='StandardButton'>send</button>
          </div>
          <div id='scoreBoard'>
            <p id='spScore' />
            <table />
          </div>
        </div>
      </div>
    )
  }
}
