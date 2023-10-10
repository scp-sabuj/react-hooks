import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
        <div>Count-1: {count} && Count-1: {countTwo}</div>
        <div>
            <button onClick={() => dispatch('increment')}>Increment1</button>
            <button onClick={() => dispatch('decrement')}>Decrement1</button>
            <button onClick={() => dispatch('reset')}>Rese1</button>
        </div>
        <div>
            <button onClick={() => dispatchTwo('increment')}>Increment2</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement2</button>
            <button onClick={() => dispatchTwo('reset')}>Rese2</button>
        </div>
    </div>
  )
}

export default CounterThree