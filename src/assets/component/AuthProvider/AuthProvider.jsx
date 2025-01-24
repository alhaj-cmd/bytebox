import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setName]= useState('tmi kno bujona');
    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)

    }
   
    
    return (
        <div>
            <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;