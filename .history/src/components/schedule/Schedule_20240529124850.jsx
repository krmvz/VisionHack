import React from 'react'
import './Schedule.scss';
import step1 from '../../images/step1.png'


const Schedule = () => {
  return (
    <div id='schedule' className='schedule container'>
      <div className="topic_schedule"></div>
      <div className="steps">
        <img src={step1} alt="first step" />
      </div>
    </div>
  )
}

export default Schedule;
