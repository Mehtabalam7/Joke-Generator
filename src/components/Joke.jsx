import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from './Button'

function joke() {

    const [jokes, setjokes] = useState("")

    const jokefetch = async () => {

        // let response = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky')
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
              'Accept': 'application/json'
          }
      });
        const data = await response.json()

        // setjokes(data.joke || `${data.setup} ${data.delivery}`)
        setjokes(data.joke)
    }

    useEffect(() => {
        jokefetch()
    },[])

  return (
    <>
    <p className='joke'>{jokes}</p>
    <Button jokefetch={jokefetch} />
    </>
  )
}

export default joke