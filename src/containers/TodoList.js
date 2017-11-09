/**
 * Created by lenovo on 2017/11/9.
 */
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

