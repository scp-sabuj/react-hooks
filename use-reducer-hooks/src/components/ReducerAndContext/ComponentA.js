import React, { useReducer } from 'react'
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentE from './ComponentE';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState
    
        default:
            return state;
    }
}

function ComponentA() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div>
                <div>Count - {count}</div>
                <div>
                    <b>ComponentA</b>
                    <button onClick={() => dispatch('increment')}>Increment</button>
                    <button onClick={() => dispatch('decrement')}>Decrement</button>
                    <button onClick={() => dispatch('reset')}>Reset</button>
                </div>
                <ComponentB />
                <ComponentC />
                <ComponentE />
            </div>
        </CountContext.Provider>
    )
}

export default ComponentA