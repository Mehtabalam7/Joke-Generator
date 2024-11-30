import React from 'react'

function Button({jokefetch}) {
  return (
    <button className='joke-btn' onClick={jokefetch}>Get another joke 😄</button>
  )
}

export default Button