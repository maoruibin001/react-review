/**
 * Created by lenovo on 2017/11/9.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import App from './components/App';
import {Provider} from 'react-redux';

const store = createStore(reducers);

import './styles/common.css';

render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'));