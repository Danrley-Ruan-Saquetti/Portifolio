import "./style.scss"

/**
 * @param {Object} props
 * @param {"object" | "component"} props.type
 * @param {"cubic" | "circle"} props.object
 * @param {{x: number, y: number}} props.position
 * @param {number} props.opacity
 * @param {number} props.size
*/
export default function ObjectFloating({ type = "object", object = "cubic", children, position = { x: Math.random(115).toFixed(2) - 15, y: Math.random(115).toFixed(2) - 15 }, size = Math.random(20).toFixed(2) + 5, opacity = 1 }) {

    if (type == "component") return <div className="object-floating component">{children}</div>

    const styles = {
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `clamp(${size - 3}rem, 3vw, ${size + 3}rem)`,
        height: `clamp(${size - 3}rem, 3vw, ${size + 3}rem)`,
        opacity
    }

    return (
        <>
            <div style={styles} className={`object-floating object ${object}`}></div>
        </>
    )
}