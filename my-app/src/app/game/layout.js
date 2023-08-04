
export default function GameLayout(props) {
    return <div id="GameLayout">
        {/* Game Page content */}
        {props.children}
        {/* Other Page Content : Analytics && Team */}
        {props.team}
        {props.analytics}
    </div>
}