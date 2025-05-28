import React, { useState } from 'react';

function App () {
  const [value,setvalue] = useState("")
  const url = "https://official-joke-api.appspot.com/random_joke"
  const joke =async() => {
    const Get =  await fetch ( url, {method:"GET"})
    const api = await Get.json()
    setvalue(api)
  }
  return(
    <div className='app'>
      <h1>jokes for you </h1>
      <p><b>setup:</b>{" "}{value.setup}</p>
      <p><b>punchline:</b>{" "}{value.punchline}</p>
      <button onClick={joke}>get joke</button>
    </div>
  )
}
export default App;

