/**
 * Created by lenovo on 2017/11/13.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';
class Portal extends Component {
  constructor(props) {
    super(props);
    this.Mask = document.createElement('div');
    document.body.appendChild(this.Mask);
  }

  componentWillUnmounted() {
    document.body.removeChild(this.Mask);
  }
  onClick() {
    document.body.removeChild(this.Mask);
  }
  render() {
    return createPortal(<div className="mask">
      <div className="child">
        <button onClick={this.onClick.bind(this)}>X</button>
      </div>
    </div>, this.Mask)
  }
}

export default Portal;
