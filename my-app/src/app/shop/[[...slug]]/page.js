export default function Shop(props) {
    const nestedParams = props.params.slug
    console.log(nestedParams)
    return <div>
        <h1>Shop</h1>
        {nestedParams}
    </div>
}