export default function ReviewPage(props){
    return <div>
        <h1>Review Details Page</h1>
        <h3>Review Id : {props.params.reviewId} and Product Id {props.params.id}</h3>
    </div>
}