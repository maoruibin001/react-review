/**
 * Created by lenovo on 2017/11/13.
 */
import React, {Component} from 'react';

const Childrens = () => {
  return [
    <li key={2}>Orange</li>,
    <li key={3}>Bnana</li>
  ]
}
const Test = ({user}) => <ul>
  <li>{user.name}</li>
  <li>fruit</li>
  <Childrens/>
</ul>

export default Test;