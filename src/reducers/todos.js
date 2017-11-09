/**
 * Created by lenovo on 2017/11/9.
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? Object.assign(todo, {completed: !todo.completed})
          : todo
      );
    default:
      return state;
  }
};

export default todos;