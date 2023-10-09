import React from 'react'

import { UserContext, ChannelContext } from '../App'

function ComponentC() {
  return (
    <div>
        <h6>ComponentC</h6>
        <h1>Pass value From Root to C- Component(Not Using useContext)</h1>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>Context-1 Value: {user} & Channel-2 Context: {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>

        
    </div>
  )
}

export default ComponentC