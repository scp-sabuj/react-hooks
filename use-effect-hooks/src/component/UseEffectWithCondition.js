import React, { useEffect, useState } from 'react'

function UseEffectWithCondition() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);

    useEffect(() => {
        console.log(`Document title changed ${count} times`);
        document.title = `Document title changed ${count} times`;
    }, [count]);
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectWithCondition