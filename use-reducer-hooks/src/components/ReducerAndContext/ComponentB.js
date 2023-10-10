import React, { useContext } from 'react'
import { CountContext } from './ComponentA'

function ComponentB() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <b>ComponentB - {countContext.countState}</b>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentB