import React, { Suspense, useState, useEffect, useContext, createContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

// Add your Firebase credentials
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBk9VHWCWzqporPokPMqviBsWrihVCWWX8",
    authDomain: "fits-platform.firebaseapp.com",
    databaseURL: "https://fits-platform.firebaseio.com",
    projectId: "fits-platform",
    storageBucket: "fits-platform.appspot.com",
    messagingSenderId: "491013404105",
    appId: "1:491013404105:web:495504a964ac89310e6418"
  })
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