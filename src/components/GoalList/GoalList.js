import React from 'react';
import './GoalList.css';

export default function GoalList(props) {
  // when the goal is clicked, pass the goal id to the parent component
  function handleClick(event) {
    console.log(event);
    props.onCompleteGoal(event);

    //props.onCompleteGoal(event.target.key);
  }

  return (
    <div className="goal-list">
      <h2>Goal List</h2>
      <ul>
        {props.goals.map((goal) => {
          return (
            <li
              onClick={() => {
                handleClick(goal.id);
              }}
              key={goal.id}
            >
              {goal.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
