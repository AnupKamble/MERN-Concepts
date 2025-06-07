// src/features/counter/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './counterSlice';

const Counter = () => {
  const countVal = useSelector(incr => incr.counter.value);

  console.log(countVal)
  const dispatch = useDispatch();

  return (
    <div>
     

      <button onClick={() => dispatch(decrement())} >-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>Count: {countVal}</h2>

    </div>
  );
};

export default Counter;
