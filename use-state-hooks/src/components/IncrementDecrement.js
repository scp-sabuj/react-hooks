import React, { useState } from 'react'

function IncrementDecrement() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const wrongIncrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(count + 1)
        }
    }

    const rightIncrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    
    return (
        <div>
            <div>
                Count: {count}

                {/* wrong way to set star */}
                {/* though it work for increament Decrement and reset */}
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount(count + 1)}>Increament</button>
                {/* reason when we update with 5 we can see it but not increase 5 */}
                <button onClick={wrongIncrementFive}>Wrong Increament 5</button>
                {/* wrong way to set ent */}


                {/* Right way to set star */}
                <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increament</button>
                <button onClick={rightIncrementFive}>Right Increament 5</button>
                {/* Right way to set ent */}
            </div>

        </div>
    )
}

export default IncrementDecrement