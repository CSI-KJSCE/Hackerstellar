import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [count, setCount] = useState(5);
  const [isCountingDown, setIsCountingDown] = useState(true);

  useEffect(() => {
    let timerId;
    if (count > 0) {
      timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      setIsCountingDown(false);
    }
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <div style={{
      background: 'black',
      position: 'absolute',
      top: '0%',
      left: '0%',
      height: '100vh',
      width: '100%',
      zIndex: '5000',
    }}>
      {isCountingDown ? (
        <div style={{
          color: 'white',
          fontSize: '5rem',
          textAlign: 'center',
        }}>
          {count}
        </div>
      ) : (
        <>
          <div style={{
            width: '100%',
            height: '50%',
            animation: 'moveUp 1s ease-in-out forwards',
          }} />
          <div style={{
            width: '100%',
            height: '50%',
            position: 'relative',
            animation: 'moveDown 1s ease-in-out forwards',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '1px',
              background: 'orange',
            }} />
          </div>
        </>
      )}
    </div>
  );
};

export default Preloader;