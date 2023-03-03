import Link from "./link"
import "./style.scss"

export default function NavigationBar({ className }) {

    return (
        <>
            <div className={"navigation-bar " + (className ? ` ${className}` : "")}>
                <ul className="nav-links">
                    <Link name={"home"} nameIcon="home">início</Link>
                    <Link name={"about-me"} nameIcon="info-circle">sobre mim</Link>
                    <Link name={"projects"} nameIcon="folder-open">projetos</Link>
                    <Link name={"contacts"} nameIcon="message-dots">contato</Link>
                </ul>
            </div>
        </>
    )
}