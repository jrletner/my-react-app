import React, { useState } from 'react';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';
import GoalList from './components/GoalList/GoalList';

export default function App() {
  // define a state variable to store the course goals
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the course main topic' },
    { id: 'cg3', text: 'Help other students in the course Q&A' },
  ]);

  // this is a callback function that will be passed to NewGoal component in order to handle the new goal once it is submitted
  function addNewGoalHandler(newGoal) {
    setCourseGoals((previousCourseGoals) => previousCourseGoals.concat(newGoal));
    console.log('Course Goals', courseGoals);
  }

  // this is a callback function that will be passed to GoalList component in order to handle the goal deletion
  function completeGoalHandler(goalId) {
    setCourseGoals((previousCourseGoals) => {
      return previousCourseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <div className="goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList onCompleteGoal={completeGoalHandler} goals={courseGoals} />
    </div>
  );
}
