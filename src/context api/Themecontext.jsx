import React, { createContext, useState } from 'react'

export const Theme = createContext()

function Usercontaxt({children}) {
const [user, setuser] = useState(null)
    
const getUser = async ()=>{
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log("data=>",data);
    setuser({
      name:data.name
      name:data.name
      name:data.name
    })
    
  } catch (error) {
    
  }
}








  return (
    <Theme.Provider value={{user,setuser}}>
    {children}
    </Theme.Provider>
  )
}

export default Usercontaxt;