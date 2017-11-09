/**
 * Created by lenovo on 2017/11/9.
 */
let id = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: id++,
  text
})

export const toggleTodo = (id) => ({
  id,
  type: 'TOGGLE_TODO'
});

export const visibleTodos = (filter) => ({
  filter,
  type: 'VISIBLE_TODOS'
});