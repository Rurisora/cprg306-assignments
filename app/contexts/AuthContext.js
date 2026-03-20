"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

//modified the path from /firebase to -> ../utils/firebase due to the structure of folder by assignment guide line.
import {auth } from "../utils/firebase"
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  
  const gitHubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const googleSignIn = () => {
  return signInWithPopup(auth, googleProvider);
};
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
 
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, googleSignIn,firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};

