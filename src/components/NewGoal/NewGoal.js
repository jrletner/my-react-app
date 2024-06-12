import React, { useState } from 'react';
import './NewGoal.css';

export default function NewGoal(props) {
  const [enteredText, setEnteredText] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // When the form is submitted, prevent the default behavior and log the entered text and reset the enteredText state
  function onSubmit(event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // handle empty input
    if (enteredText.trim().length === 0) {
      return;
    }
    // handle empty date
    if (enteredDate.trim().length === 0) {
      return;
    }

    // create a new goal object
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
      dueDate: enteredDate,
    };

    // pass the new goal object to the onAddGoal function
    props.onAddGoal(newGoal);

    // reset the enteredText state
    setEnteredText('');
  }

  // As the input text changes, update the enteredText state
  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  return (
    <div>
      <form className="new-goal" onSubmit={onSubmit}>
        <label>Course Goal</label>
        <input required onChange={textChangeHandler} value={enteredText} type="text" />
        <label>Due Date</label>
        <input required type="date" onChange={dateChangeHandler} />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}
