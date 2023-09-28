import React, { useState } from 'react'

function HooksWithArray() {

    const [items, setItems] = useState([]);

    const addNewItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addNewItem} >Add New Item</button>
            <ul>
                {items.map(item => (
                    <li key={ item.id }>{ item.value }</li>
                ))}
            </ul>
        </div>
    )
}

export default HooksWithArray