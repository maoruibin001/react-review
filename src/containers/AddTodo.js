/**
 * Created by lenovo on 2017/11/9.
 */
import Todo from '../components/AddTodo';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const mpaStateToProps = (state, props) => {
  return {};
}
const mapDispatchToProps = {
  onSubmit: addTodo
}
// const mapDispatchToProps = (dispatch, props) => ({
//   onSubmit: (text) => {
//     dispatch(addTodo(text));
//   }
// });
const AddTodo = connect(
  mpaStateToProps,
  mapDispatchToProps
)(Todo);

export default AddTodo;