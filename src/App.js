import React, { useContext } from 'react'
import { Theme } from './context api/Themecontext'

function App() {
   
  const {user,setuser} = useContext(Theme)
  const change = ()=>{
    setuser({
      name :"sikander ali",
      age :"35",
      email :"sikanderali@gamil.com"
    })
  }
  
  return (
    
    <>
    <h1>hi i am {user.name}</h1>
    <h1>And my age is  {user.age}</h1>
    <h1>And my email is {user.email}</h1>
    <button style={{border:"2px solid blue",padding:"5px",borderRadius:"20px"}}
    onClick={change}
    >Change data</button>
</>
  )
}

export default App