import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function Skill(props) {
  let level = props.level;
  return (
    <div className="Skill">
      <h2>Skills Display</h2>
      <span className="skill">
        <span className="skillName">{props.skill}</span>
        <span className="level">
          {level === 1 ? (
            <div className="circle filled Beginner" />
          ) : (
            <div className="circle Beginner" />
          )}
          {level === 2 ? (
            <div className="circle filled Intermediate" />
          ) : (
            <div className="circle Intermediate" />
          )}
          {level === 3 ? (
            <div className="circle filled Pg" />
          ) : (
            <div className="circle Pg" />
          )}
        </span>
      </span>
    </div>
  );
}