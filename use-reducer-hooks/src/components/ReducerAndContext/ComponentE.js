import React, { useContext } from 'react'
import { CountContext } from './ComponentA'
import ComponentF from './ComponentF';

function ComponentE() {
    return (
        <div>
            ComponentE - called ComponentF
            <ComponentF /> 
        </div>
    )
}

export default ComponentE