import  ClientComponent  from './client'
import ExampleServerComponent from './server-component'

export default function ClientPage() {
    return <>
        <h1>Server Page</h1>
        {/* Pattern 1: Client Component uses Server Compoent */}
        {/* <ClientComponent /> */}
        {/* Pattern 2: client Component uses server component but without loosing server complation */}
        <ClientComponent>
            {/* Pass server component as Prop */}
            <ExampleServerComponent/>
        </ClientComponent>
    </>
}