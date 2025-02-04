import React, { createContext} from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../Firebase/Firebase-init';
// import { auth } from '../../../Firebase/Firebase-init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    // const [user, setName]= useState('tmi kno bujona');
    const registerUser = (email, password) =>{
        console.log(email);
        createUserWithEmailAndPassword(auth, email, password)
        .then( result => console.log(result.user));

    }
    // LOGIN SECTIONS
    const logInUser = (email, password) =>{
        console.log(email, 'data could not find');
        signInWithEmailAndPassword(auth, email, password)
        .then( result => console.log(result.user));

    }
   
    const authInfo ={
        registerUser,
        logInUser
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;