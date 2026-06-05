import React, { createContext, useState } from 'react'

export const Theme = createContext()

function Usercontaxt({children}) {
const [user, setuser] = useState({
  name:"abdurehman",
  age:"18",
  email:"mrmaneditor"
})
    

  return (
    <Theme.Provider value={{user,setuser}}>
    {children}
    </Theme.Provider>
  )
}

export default Usercontaxt;