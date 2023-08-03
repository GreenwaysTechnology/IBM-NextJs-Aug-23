//mock data 
import Link from "next/link"
// import { COMMENTS } from "./comments"

export default async function CommentsPage() {
    //api call
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const COMMENTS = await response.json()
    return <>
        <h1>Comments List</h1>
        <ul>
            {COMMENTS.map(comment => {
                return <li key={comment.id}>
                    <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
                </li>
            })}
        </ul>
    </>
}