import { useCallback, useContext, useEffect } from "react"
import { SessionContext } from "../../contexts/sessionContext"
import "./style.scss"

export default function Session({ className, name, children }) {
    const { toggleCurrentSession } = useContext(SessionContext)

    const verifyIsVisible = (el) => {
        const { top, bottom } = el.getBoundingClientRect()

        return (top >= 0 && top <= innerHeight / 2) || (bottom >= innerHeight / 2 && bottom <= innerHeight)
    }

    const verifySessionVisible = useCallback(() => {
        const el = document.getElementById(`${name}`)

        if (!el) { return }

        const isVisible = verifyIsVisible(el)

        if (!isVisible) { return }

        toggleCurrentSession(name)
    })

    useEffect(() => {
        addEventListener("scroll", verifySessionVisible)

        verifySessionVisible()

        return () => {
            removeEventListener("scroll", verifySessionVisible)
        }
    }, [verifySessionVisible])

    return (
        <>
            <div onH id={name} className={"session" + (className ? ` ${className}` : "")}>{children}</div>
        </>
    )
}