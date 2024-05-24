import React from 'react';
import './mainPage.scss';
import Problems from '../../components/problems/problems';
import Schedule from '../../components/schedule/Schedule';

const MainPage = () => {
  return (
    <div className='mainPage'>
        
        <Problems />
        <Schedule/>
    </div>
  )
}

export default MainPage;
