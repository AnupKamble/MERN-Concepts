// src/features/counter/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './counterSlice';

const Counter = () => {

  const decrbuttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };
  const incrbuttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };


  const countVal = useSelector(incr => incr.counter.value); 
                              // var = var.reducer.initialState.value
   //  Accissing the value from the state using useSelector hook
                              
  // console.log(countVal)

  const dispatch = useDispatch();
  // useDispatch hook is used to dispatch actions to the store

  return (
    <div>
      <button style={decrbuttonStyle} onClick={() => dispatch(decrement())} >-</button>
      <button style={incrbuttonStyle} onClick={() => dispatch(increment())}>+</button>
      <h2>Count: {countVal}</h2>
 
    </div>
  );
};

export default Counter;
