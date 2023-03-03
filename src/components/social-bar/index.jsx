import Link from "./link"
import "./style.scss"

export default function SocialBar({ className }) {

    return (
        <>
            <div className={"social-bar" + (className ? ` ${className}` : "")}>
                <ul className="social-links">
                    <Link href={"https://www.instagram.com/dan__ruan"} nameIcon="instagram-alt" prefixNameIcon="bxl">Instagram</Link>
                    <Link href={"https://github.com/Danrley-Ruan-Saquetti"} nameIcon="github" prefixNameIcon="bxl">GitHub</Link>
                    <Link href={"https://www.linkedin.com/in/danrley-saquetti"} nameIcon="linkedin" prefixNameIcon="bxl">Linkedin</Link>
                </ul>
            </div>
        </>
    )
}