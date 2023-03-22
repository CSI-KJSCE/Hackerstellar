import React, { useState, useEffect } from 'react';
import './styles/Prizes.css';

const Prizes = () => {
  return (
    <>
      <div className='prizes'>
        <div className='prizes_title'>
          <h1>Prizes</h1>
          <p> <span>&gt;</span> PROBLEM STATEMENTS WILL BE BASED ON THESE  <span>&lt;</span> </p>
        </div>
        <div className='prizes_incomplete'>
          <h1>COMING  SOON</h1>
        </div>
      </div>
    </>
  )
}

export default Prizes;