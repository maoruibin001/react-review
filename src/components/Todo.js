/**
 * Created by lenovo on 2017/11/9.
 */
import React from 'react';
const Todo = ({todo, onClick}) => {
  return <li
    style={{'textDecoration': todo.complete ? 'line-through': 'none'}}
    onClick={onClick}>{todo.text}</li>
};

export default Todo;