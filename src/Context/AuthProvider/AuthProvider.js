import React, { createContext } from 'react';
import useFirebase from '../../Pages/Shared/Authentication/Hook/useFirebase';




export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
  
    const data={allContext}
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;