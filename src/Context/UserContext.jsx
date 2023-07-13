import { createContext, useContext, useState } from 'react';

// Context object -> exposing the context
export const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

// Provider -> managing the state
const UserProvider = ({children}) => {

    const[user, setUser] = useState(null)

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={state}>
        {children}
        </UserContext.Provider>


    )
}

export default UserProvider
