/**
 * Created by lenovo on 2017/11/9.
 */
let id = 0;
export const AddTodo = (text) => ({
  text,
  id: id++,
  type: 'ADD_TODO'
});

export const ToggleTodo = (id) => ({
  id,
  type: 'TOGGLE_TODO'
});

export const VisibleTodos = (filter) => ({
  filter,
  type: 'VISIBLE_TODOS'
});