/**
 * Created by lenovo on 2017/11/9.
 */
import React from 'react';

const Todo = ({onSubmit}) => {
  let input;
  return <form onSubmit={(e) => {
    e.preventDefault();
    if (!input.value.trim()) return;
    onSubmit(input.value);
    input.value = '';
  }
  }>
    <input type="text" ref={node => {
      input = node;
    }}/>
    <button type="submit">submit</button>
  </form>
}


export default Todo;