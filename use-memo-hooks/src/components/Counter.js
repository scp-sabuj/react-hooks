import React, {useState, useMemo} from 'react'

function Counter() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const counterOne = () => {
        setCountOne(countOne + 1);
    }

    const counterTwo = () => {
        setCountTwo(countTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return countOne % 2 === 0;
    }, [countOne])


    return (
        <div>
            <div>
                <button onClick={counterOne}>Count One {countOne}</button>
                <span>{ isEven ? 'Even' : 'Odd' }</span>
            </div>

            <div>
                <button onClick={counterTwo}>Count Two {countTwo}</button>
            </div>
        </div>
    )
}

export default Counter