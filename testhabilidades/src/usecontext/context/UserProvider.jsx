import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        <>
            <UserContext.Provider value={{ msg: 'Bienvenido', user, setUser }} >
                {children}
            </UserContext.Provider>

        </>
    )
}