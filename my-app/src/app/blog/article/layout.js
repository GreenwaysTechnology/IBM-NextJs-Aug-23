export default function ArticleLayout(props) {
    return <div id="ArticleLayout">
        <h2>Article Header</h2>
        {props.children}
        <h2>Article Footer</h2>
    </div>
}