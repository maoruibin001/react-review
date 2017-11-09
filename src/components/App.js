/**
 * Created by lenovo on 2017/11/9.
 */
import React, {Component} from 'react';
class App extends Component{
  constructor (props, context) {
    super(props, context);
    this.state = { name: 'mao rui bin' };
  }

  render() {
    return <div>
      <h1>{this.state.name}</h1>
      <h2>i love you</h2>
    </div>
  }
}

export default App;