import React from 'react';
import './styles/Sponsors.css';
import Button from '../components/Button';

const Sponsors = () => {
  return (
    <>
      <div className='sponsor'>
        <div className='sponsor_title'>
          <h1>Sponsors</h1>
          <p> <span>&gt;</span> Want to become a Sponsor? Hit the button below! <span>&lt;</span> </p>
        </div>
        <div className='sponsor_button'>
          <Button text="Contact Us"/>
        </div>
      </div>
    </>
  )
}

export default Sponsors