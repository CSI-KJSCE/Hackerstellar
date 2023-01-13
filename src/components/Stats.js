import React, { useState, useEffect } from "react";
import "./styles/Stats.css";

function Counter({ target, className }) {
  const [count, setCount] = useState(0);
  let interval = 10;
  useEffect(() => {
    let timeout;
    if (count < target) {
      timeout = setTimeout(() => {
        setCount(count + 1);
      }, interval);
    } else {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [count, target, interval]);

  return <div className={className}>{`${count}+`}</div>;
}

function Stat({ title, subtitle, target }) {
  return (
    <div className="stat">
      <Counter target={target} className='stat_counter'/>
        <div className="stat_content">
            <h3 className="stat_content_title">{title}</h3>
            <p className="stat_content_subtitle">{subtitle}</p>
        </div>
    </div>
  );
}

const Stats = () => {
  return (
    <>
      <div className="stats">
        <Stat title="Participants" subtitle="Nationwide Ninjas" target={250} />
        <Stat title="Teams" subtitle="Collaborative Commandos" target={50} />
        <Stat title="Colleges" subtitle="Campus Titans" target={100} />
        <Stat title="Participants" subtitle="Regional Rockstars" target={100} /> 
      </div>
    </>
  );
};

export default Stats;
