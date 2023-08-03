export default function BlogLayout(props) {
    return <div id="BlogLayout">
        <h2>Blog Header</h2>
        {props.children}
        <h2>Blog Footer</h2>
    </div>
}