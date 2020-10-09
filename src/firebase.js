import React, { Suspense, useState, useEffect, useContext, createContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from "./firebaseConfig"

// Add your Firebase credentials
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const FirebaseAuthContext = createContext()

export function FirebaseAuthenticationProvider({ children }) {
  const auth = useFirebaseProviderAuth()
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <FirebaseAuthContext.Provider value={auth}>{children}</FirebaseAuthContext.Provider>
    </Suspense>
  )
}

export const useFirebaseAuth = () => {
  return useContext(FirebaseAuthContext)
}

function useFirebaseProviderAuth() {
  const [user, setUser] = useState(null)
  
  const signIn = async () => {
    const response = await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    setUser(response.user)
    return response.user
  }

  const signOut = async () => {
    await firebase.auth().signOut()
    setUser(false)
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) { setUser(user) }
      else { setUser(false) }
    })

    return () => unsubscribe()
  }, [])
  
  return { user, signIn, signOut }
}