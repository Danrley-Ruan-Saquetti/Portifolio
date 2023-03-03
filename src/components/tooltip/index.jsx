import "./style.scss"

export default function Tooltip({ direction = "top", className, children }) {

    return (
        <>
            <div className={"tooltip " + direction + (className ? ` ${className}` : "")}>{children}</div>
        </>
    )
}