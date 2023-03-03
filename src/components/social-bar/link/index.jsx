import Tooltip from "../../tooltip";
import "./style.scss"

export default function Link({ tooltip = { className: "" }, href = "#", prefixNameIcon = "bx", nameIcon = "", children }) {

    return (
        <>
            <li className={"link-social"}>
                <a href={href} target="_blank" className="tooltip-content">
                    <i className={"link-icon bx " + prefixNameIcon + "-" + nameIcon}></i>
                    <Tooltip className={"link-name" + (tooltip.className ? ` ${tooltip.className}` : "")}>{children}</Tooltip>
                </a>
            </li>
        </>
    )
}