// import React, { useContext } from 'react'
// import { Theme } from './context api/Themecontext'

function App() {
   
  // const { user,} = useContext(Theme)
  // console.log("user in app", user)

  // if (!user) {
  //   return <h1>Loading user...</h1>
  // }

  function handleClick(event) {
  event.preventDefault();
  alert("Default action stopped");
}

return (
  <a href="https://google.com" onClick={handleClick}>
    Google
  </a>
);
  
  return (
    <>
      {/* <h1>hi i am {user.name}</h1> */}
       {/* <h1>And my age is  {user.username}</h1> */}
      {/* <h1>And my email is {user.email}</h1> */}
      {/* <button style={{border:"2px solid blue",padding:"5px",borderRadius:"20px"}}
      onClick={change}
      >Change data</button> */}
      
    </>
  )
}

export default App