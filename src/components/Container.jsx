import { CardView } from "./CardView"
import {TableView} from "./TableView"

export function Container() {
    return <div>
        {/* <Header/> */}
        <CardView months = {"Last Month"}/>
        <TableView/>
    </div>
}
