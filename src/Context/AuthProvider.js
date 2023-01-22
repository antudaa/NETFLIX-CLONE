import React, { createContext, useEffect, useState } from 'react';
import app from '../FirebaseConfig/FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({});

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const Login = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    };

    // SingIn With Google 
    const GoogleSignIn = (provider) => {
        setLoading(true);
        signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        createUserWithEmail,
        Login,
        logOut,
        GoogleSignIn,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;