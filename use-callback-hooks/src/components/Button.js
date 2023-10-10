import React, { Children } from 'react'

function Button({ handleClick, children }) {
    console.log(`Button is: ${handleClick}`);
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default React.memo(Button)