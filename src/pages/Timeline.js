import React, { useState, useEffect } from 'react';
import './styles/Timeline.css';

const Timeline = () => {
  let countDownDate = new Date("Mar 23, 2023 00:00:00").getTime();
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);

  function setTime() {
    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
    setTimeout(() => {
      now = new Date().getTime();
      timeleft = countDownDate - now;
      setTime();
    }, 1000);
  }

  useEffect(() => {
    setTime();
  });

  return (
    <>
      <div className='timeline'>
        <div className='timeline_title'>
          <h1>Timeline</h1>
          <p> <span>&gt;</span> SCHEDULE OF THE WHOLE EVENT FROM HEAD TO TOE <span>&lt;</span> </p>
        </div>
        <div className='timeline_incomplete'>
          <h1>COMING<br/>SOON</h1>
        </div>
        {/* <div className="timeline_counter">
          <Counter val={days} text='Days' />
          <Counter val={hours} text='Hours' />
          <Counter val={minutes} text='Minutes' />
          <Counter val={seconds} text='Seconds' />
        </div> */}
      </div>
    </>
  )
}

function Counter(props) {
  return (
    <div className="counter_component">
      <div>
        <h1>{props.val}</h1>
      </div>
      <h4>{props.text}</h4>
    </div>
  );
}

export default Timeline