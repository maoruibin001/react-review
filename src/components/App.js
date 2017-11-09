/**
 * Created by lenovo on 2017/11/9.
 */
import React, {Component, PropTypes} from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

const App = () => {
  return <div>
    <AddTodo/>
    <TodoList/>
  </div>
}

export default App;