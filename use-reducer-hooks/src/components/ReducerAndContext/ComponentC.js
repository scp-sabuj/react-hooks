import React from 'react'
import ComponentD from './ComponentD'

function ComponentC() {
  return (
    <div>
        ComponentC - called ComponentD
        <ComponentD /> 
    </div>
  )
}

export default ComponentC