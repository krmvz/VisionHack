import React from 'react';
import './mainPage.scss';
import Problems from '../../components/problems/problems';
import Schedule from '../../components/schedule/Schedule';

const MainPage = () => {
  return (
    <div className='mainPage'>
        <div className="content container">
            <div className="main_text">MAKE COMPUTER VISION AND ARTIFICIAL INTELLIGENCE SYSTEMS CLOSER TO STUDENTS</div>
            <div className="logs">
            <button></button>
            <button></button>
            </div>
        </div>
        <Problems />
        <Schedule/>
    </div>
  )
}

export default MainPage;
