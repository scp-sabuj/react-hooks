import React, { useEffect, useState } from 'react'

function UseEffectWithNoDependency() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
          setCount((count) => count + 1);
        }, 5000);

        // return () => clearTimeout(timer);
    }, []); // here we assign empty dependency;

    return (
        <div>
            <small>This will count only for first time. Because we passed an empty dependency--.</small>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default UseEffectWithNoDependency