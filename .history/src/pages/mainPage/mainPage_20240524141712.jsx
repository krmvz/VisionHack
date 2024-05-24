import React from 'react';
import './mainPage.scss';
import Problems from '../../components/problems/problems';
import Schedule from '../../components/schedule/Schedule';

const MainPage = () => {
  return (
    <div className='mainPage'>
        <div className="mainPage_text">
            <div className="main_text">
                
            </div>
            <div className="logs">

            </div>
        </div>
        <Problems />
        <Schedule/>
    </div>
  )
}

export default MainPage;
