/**
 * Created by lenovo on 2017/11/9.
 */
import React from 'react';

import Todo from '../components/Todo';

const TodoList = ({todos, onClick}) => {
  return <ul>
    {
      todos.map(todo => <Todo key={todo.id} todo={todo} onClick={() => onClick(todo.id)}/>)
    }
  </ul>
}

export default TodoList;