import React from 'react';
import './GoalList.css';

export default function GoalList(props) {
  // when the goal is clicked, pass the goal id to the parent component
  function handleClick(event) {
    props.onCompleteGoal(event);
  }

  // place the goals in an array
  const pols = props.goals.length;

  // render the list of goals
  return (
    // don't display if there are no goals

    <div className="goal-list">
      {props.goals.length > 0 ? <h2>Goal List</h2> : <h4>Please enter a goal</h4>}
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
              {goal.text} - Due: {goal.dueDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
