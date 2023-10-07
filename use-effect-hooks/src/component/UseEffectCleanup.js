import React, { useEffect, useState } from 'react'

function UseEffectCleanUp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count => count + 1)
        }, 1000);

        return () => clearTimeout(timer);

    }, [])

    return (
        <div>
            <h1>Effect Cleanup</h1>
            <p>Some effects require cleanup to reduce memory leaks.</p>
            <p>Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.</p>
            <p>We do this by including a return function at the end of the useEffect Hook.</p>

            <h6>I've rendered {count} times!</h6>
            
        </div>
    )
}

export default UseEffectCleanUp