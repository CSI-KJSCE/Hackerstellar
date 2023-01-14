import React, { useState, useEffect } from "react";
import "./styles/Stats.css";

function Counter({ target, trigger, className }) {
  const [count, setCount] = useState(0);
  let interval = 10;
  useEffect(() => {
    let timeout;
    if (trigger !== 'about') return;
    if (count < target) {
      timeout = setTimeout(() => {
        setCount(count + 1);
      }, interval);
    } else {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [count, target, interval, trigger]);

  return <div className={className}>{`${count}+`}</div>;
}

function Stat({ title, subtitle, target, current }) {
  return (
    <div className="stat">
      <Counter target={target} className="stat_counter" trigger={current}/>
      <div className="stat_content">
        <h3 className="stat_content_title">{title}</h3>
        <p className="stat_content_subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

const Stats = (props) => {
  return (
    <>
      <div className="stats">
        <h2>Statistics</h2>
        <Stat title="Participants" subtitle="Nationwide Ninjas" target={250} current={props.current}/>
        <Stat title="Teams" subtitle="Collaborative Commandos" target={50} current={props.current}/>
        <Stat title="Colleges" subtitle="Campus Titans" target={100} current={props.current}/>
        <Stat title="States" subtitle="Regional Rockstars" target={6} current={props.current}/>
      </div>
    </>
  );
};

export default Stats;
