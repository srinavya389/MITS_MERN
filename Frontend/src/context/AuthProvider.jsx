import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
    const user={
        Id:1,
        Name:"Vamsi",
        Email:"Vamsi17@gmail.com"
    }
  return (
   <AuthContext.Provider value={user}>
    {children}

   </AuthContext.Provider>
  )
}

export default AuthProvider