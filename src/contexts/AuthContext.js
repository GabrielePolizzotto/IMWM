import { createContext, useContext, useEffect, useState } from "react"
import {auth} from '../firebase'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider= ({children}) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)
  
  const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

  const logout = () => auth.signOut()

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false)
      setCurrentUser(user)
    })

    return unsubscribe
  },[])
  

  const value = {currentUser, login, signup, logout}

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}