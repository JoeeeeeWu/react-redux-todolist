/*
import React from 'react';

const Todo = ({completed,text,onClick})=>(
    <li
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>
);

export default Todo;*/


import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo