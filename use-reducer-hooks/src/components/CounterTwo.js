import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, firstCounter: state.firstCounter + action.value };

        case 'decrement1':
            return { ...state, firstCounter: state.firstCounter - action.value };

        case 'reset1':
            return { ...state, firstCounter: 0 }

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };

        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };

        case 'reset2':
            return { ...state, secondCounter: 0 }
    
        default:
            return state;
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>First Count: {count.firstCounter} === Second Count: {count.secondCounter}</div>
            <div>
                <button onClick={() => dispatch({type: 'increment1', value: 1})}>Increment1 By 1</button>
                <button onClick={() => dispatch({type: 'decrement1', value: 1})}>Decrement1 By 1</button>
                <button onClick={() => dispatch({type: 'increment1', value: 5})}>Increment1 BY 5</button>
                <button onClick={() => dispatch({type: 'decrement1', value: 5})}>Decrement1 By 5</button>
                <button onClick={() => dispatch({type: 'reset1'})}>Reset1</button>
            </div>

            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment2 By 1</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement2 By 1</button>
                <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment2 BY 5</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement2 By 5</button>
                <button onClick={() => dispatch({type: 'reset2'})}>Reset2</button>
            </div>
        </div>

        
    )
}

export default CounterTwo