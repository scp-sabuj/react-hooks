import React, { useEffect, useState } from 'react'

function TimerUsingUseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);
    })

    return (
        <div>
            <h1>I have been rendered {count} times!</h1>
        </div>
    )
}

export default TimerUsingUseEffect