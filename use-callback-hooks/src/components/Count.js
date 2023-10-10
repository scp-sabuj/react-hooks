import React from 'react'

function Count(props) {
    console.log(`count is: ${props.text}`);
  return (
    <h5>Your {props.text} is : {props.count}</h5>
  )
}

export default React.memo(Count)