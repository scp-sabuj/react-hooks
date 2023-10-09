import React, {useContext}  from 'react'
import ComponentC from './ComponentC'

import { UserContext, ChannelContext } from '../App'

function ComponentB() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);


  return (
    <div>
        <ComponentC />

        <h1>Pass value From Root to B- Component Using useContext(Using useContext)</h1>
        <div>Context-1 Value: {user} & Channel-2 Context: {channel}</div>
    </div>
  )
}

export default ComponentB