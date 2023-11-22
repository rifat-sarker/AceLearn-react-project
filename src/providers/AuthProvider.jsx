
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { createContext } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
        logIn
    }
   
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;