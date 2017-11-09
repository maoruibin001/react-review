/**
 * Created by lenovo on 2017/11/9.
 */
import {connect} from 'react-redux';
import Todo from '../components/Todo';
import {toggleTodo} from '../actions';

const mapStateToProps = (state) => {
  return {
    id: state.id
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

