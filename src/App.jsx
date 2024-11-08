import React, { useState } from 'react'

const App = () => {
  const submitHandler=(e)=>{ 
    e.preventDefault()
    console.log(username);
    setusername('')
  }

  const [username, setusername] = useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username}
        onChange={(e)=>{
         setusername(e.target.value);
        }} 
        className='px-4 rounded py-3 text-xl m-5' type="text" placeholder='Enter your name' />
        <button className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600'>Submit</button>
      </form>
    </div>
  )
}

export default App