import React from 'react';
import './GoalList.css';

export default function GoalList(props) {
  // when the goal is clicked, pass the goal id to the parent component
  function handleClick(event) {
    props.onCompleteGoal(event);
  }

  // render the list of goals
  return (
    <div className="goal-list">
      <h2>Goal List</h2>
      <ul>
        {props.goals.map((goal) => {
          return (
            <li
              title="Click to complete"
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
