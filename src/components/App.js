/**
 * Created by lenovo on 2017/11/9.
 */
import React, {Component, PropTypes} from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import ErrorBoundary from './ErrorBoundary'
import Test from './test';
import Portal from './Portal';
import Update from './Update'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maskIsShow: true
    }
  }
  onClick() {
    this.setState({maskIsShow: false});
  }
  render() {
    return [
      <ErrorBoundary>
        <div>
          <AddTodo/>
          <TodoList/>
          <Test user={{name: 'maoruibin'}}/>
          {this.state.maskIsShow ? <Portal onClick={this.onClick.bind(this)}/> : null}
        </div>
      </ErrorBoundary>,
      <Update/>
    ]
  }

}

export default App;