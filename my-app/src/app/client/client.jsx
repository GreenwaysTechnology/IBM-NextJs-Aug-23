'use client';
// import ExampleServerComponent from "./server-component";

export default function ClientComponent(props) {
    return <>
        <h2>Client Component</h2>
        <button onClick={() => {
            alert('Client Compoent')
        }}>Client</button>
        {/* <ExampleServerComponent/> */}
        {props.children}
    </>
}