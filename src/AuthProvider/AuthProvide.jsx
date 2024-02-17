import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.confiq";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null) 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false)

    const googleProvider = new GoogleAuthProvider();

    // create a new  User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  //  login
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };
  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update profile 
  const updateName = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
  }

    // google LogIn
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // manage users
  useEffect(() => {
    const unSubscribedUsers = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribedUsers();
    };
  }, []);

    const authInfo = {
        user,
        googleLogIn,
        createUser,
        logInUser,
        logOut,
        updateName,
      loading,
      darkMode,
      setDarkMode
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;