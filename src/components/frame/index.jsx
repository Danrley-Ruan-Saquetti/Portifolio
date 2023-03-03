import "./style.scss"

export default function Frame({ src, alt = "", className, details }) {

    return (
        <>
            <div className={"frame" + (className ? ` ${className}` : "")}>
                <div className="img-content">
                    <img src={src} alt={alt} />
                </div>
                {details}
            </div>
        </>
    )
}