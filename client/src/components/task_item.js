import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const { name } = task;
  return (
    <div>
      <h3>{name} <Link to={`/tasks/${task.id}`} >&#8680;</Link></h3>
      
    </div>
  )

}

export default TaskItem;

// build some type of onClick to pass to props here -> onClick, go to individual task view
