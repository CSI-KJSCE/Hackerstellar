import React from 'react';
import './styles/Card.css';

const Card = (props) => {
  return (
    <>
        <div className='card'>
            <div className='card_title' style={{
                backgroundColor: props.color,
            }}>
                <h1><b>{props.title}</b></h1>
            </div>
            <div className='card_content' style={{
                borderBottom: `10px solid ${props.color}`,
            }}>
                <p>{props.content}</p>
            </div>
            <div className='card_subtitle'>
                <h1  style={{
                    textShadow: `0px 0px 7.5px ${props.color}`
                }}>{props.subtitle}</h1>
            </div>
        </div>
    </>
  )
}

export default Card