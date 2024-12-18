import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TodoList from './App';

function Result(){
  return(
    <TodoList></TodoList>
  )
}
ReactDOM.render(<Result/>,document.getElementById('root'))