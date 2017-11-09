/**
 * Created by lenovo on 2017/11/9.
 */
import todos from './todos';
import visibility from './visibility';

import {combineReducers} from 'redux';

const reducers = combineReducers({
  todos,
  visibility
});

export default reducers;