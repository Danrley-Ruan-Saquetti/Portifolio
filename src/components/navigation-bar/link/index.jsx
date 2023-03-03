import { useContext } from "react";
import { SessionContext } from "../../../contexts/sessionContext";
import Tooltip from "../../tooltip";
import "./style.scss"

export default function Link({ tooltip = { className: "" }, name, prefixNameIcon = "bx", nameIcon = "", children }) {
    const { currentSession } = useContext(SessionContext)

    return (
        <>
            <li className={"links" + (currentSession == name ? " active" : "")}>
                <a href={`#${name}`} className="tooltip-content">
                    <i className={"link-icon bx " + prefixNameIcon + "-" + nameIcon}></i>
                    <Tooltip className={"link-name" + (tooltip.className ? ` ${tooltip.className}` : "")}>{children}</Tooltip>
                </a>
            </li>
        </>
    )
}