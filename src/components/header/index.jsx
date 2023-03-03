import "./style.scss"

export default function Header({ className, children }) {

    return (
        <>
            <header className={"" + (className ? ` ${className}` : "")}>{children}</header>
        </>
    )
}