import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({children,user}) => {
  return <> {user ? children : <Navigate to={'/login'} /> } )</>
}

export default ProtectRoute
