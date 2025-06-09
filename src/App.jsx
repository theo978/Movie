import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Player from "./player/Player"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./fireBase/FireBase"
import { useEffect, useState } from "react"
import ProtectRoute from "./context/ProtectRoute"

function App() {
  const [user,setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      setUser(user);
      setIsLoading(false);
    });
    return ()=> unSub();
  },[])

  if(isLoading){
    return <>
    <div className="loading" >
      <h1 className="load" >Loading ...</h1>
    </div>
    </>
  }

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={ <ProtectRoute user={user} > <Home/> </ProtectRoute>  }/>
          <Route path="/login" index element={<Login user={user} />}/>
          <Route path="/player/:id" element={<Player/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
