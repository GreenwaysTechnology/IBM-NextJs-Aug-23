//import { getUser } from "../lib/getuser"
import { getUser } from "@/lib/getuser"

export default async function PanelLayout(props) {
    const isAdmin = await getUser()
    return <div id="PanelLayout">
         <div>
            {/* Panel Page */}
            {props.children}
            {/* Conditional Rendered Page */}
            {isAdmin ? props.adminpanel : props.userpanel}
        </div>
    </div>
}