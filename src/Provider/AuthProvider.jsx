import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import axios from "axios";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // google provider
  const googleProvider = () => {
    return signInWithPopup(auth, provider);
  };

  // update profile
  const profile = (userProfile) => {
    setLoading(false);
    return updateProfile(auth.currentUser, userProfile);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser?.email) {
        const userEmail = { email: currentUser.email };
        axios
          .post(`${import.meta.env.VITE_LOCALHOST}/jwt`, userEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("login", res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_LOCALHOST}/signOut`,
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log("logout", res.data);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
      // setLoading(false);
      return () => unsubscribe();
    });
  }, []);

  const authInfo = {
    user,
    loading,
    setUser,
    logOut,
    loginUser,
    createUser,
    profile,
    googleProvider,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}
