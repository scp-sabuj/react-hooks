import React, { useEffect, useState } from 'react'

function UseEffectWithDependency() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(1);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count]) // here we assign a dependency;

    return (
        <div>
            <h6>Count: {count}</h6>
            <button onClick={() => setCount((c) => c + 1)}>Click Button</button>
            <h3>calculation: {calculation}</h3>
        </div>
    )
}

export default UseEffectWithDependency