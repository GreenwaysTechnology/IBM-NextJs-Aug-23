
export default async function DetailsPage(props) {
    const url = `https://jsonplaceholder.typicode.com/comments/${props.params.id}`
    const response = await fetch(url)
    const comment = await response.json()

    return <>
        <h2>{JSON.stringify(comment)}</h2>
        <div>
            <h2>Id : {comment.id}</h2>
            <h2>Name : {comment.name}</h2>
            <h2>Email :{comment.email}</h2>

        </div>
    </>
}
//SSG code :this code will run only during build time .
export async function generateStaticParams() {
    const url = `https://jsonplaceholder.typicode.com/comments`
    const response = await fetch(url)
    const comments = await response.json()

    //you must return object 
    return comments.map(comment => {
        let id = comment.id.toString()
        return {
            id
        }
    })

}





