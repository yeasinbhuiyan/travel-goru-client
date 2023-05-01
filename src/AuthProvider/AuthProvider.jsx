import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)




    const createAccount =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginAccount =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

 
    const logOut=()=>{
        signOut(auth)
    }

  useEffect(()=>{

    const unsubscirbe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)


    })
    return ()=>{unsubscirbe()}
  },[])

    
  const authInfo={
    createAccount,
    loginAccount,
    logOut,
    loading,
    user 
  }

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;