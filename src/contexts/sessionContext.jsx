import { createContext, useState } from "react";

const SessionContext = createContext()

const SessionProvider = ({ children }) => {
    const [currentSession, setCurrentSession] = useState("")

    const toggleCurrentSession = (session) => {
        setCurrentSession(session)
    }

    return (
        <>
            <SessionContext.Provider value={{ currentSession, toggleCurrentSession }}>
                {children}
            </SessionContext.Provider>
        </>
    )
}

export { SessionContext, SessionProvider }