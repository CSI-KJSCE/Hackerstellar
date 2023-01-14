import React, { useState, useEffect } from "react";
import "./styles/Stats.css";

function Counter({ target, trigger, className, interval }) {
  const [count, setCount] = useState(0);
  let intervalTime = interval || 10;
  useEffect(() => {
    let timeout;
    if (trigger !== "about") return;
    if (count < target) {
      timeout = setTimeout(() => {
        setCount(count + 1);
      }, intervalTime);
    } else {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [count, target, intervalTime, trigger]);

  return <div className={className}>{`${count}+`}</div>;
}

function Stat({ title, subtitle, target, current, interval }) {
  return (
    <div className="stat">
      <Counter target={target} className="stat_counter" trigger={current} interval={interval}/>
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
        <Stat
          title="Participants"
          subtitle="Nationwide Ninjas"
          target={250}
          interval={5}
          current={props.current}
        />
        <Stat
          title="Teams"
          subtitle="Collaborative Commandos"
          target={50}
          interval={40}
          current={props.current}
        />
        <Stat
          title="Colleges"
          subtitle="Campus Titans"
          target={25}
          interval={80}
          current={props.current}
        />
        <Stat
          title="States"
          subtitle="Regional Rockstars"
          target={6}
          interval={333}
          current={props.current}
        />
      </div>
    </>
  );
};

export default Stats;
