import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }

    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
    const googleLogin = ()=> {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
        setLoading(true)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }
    }, [])

    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;