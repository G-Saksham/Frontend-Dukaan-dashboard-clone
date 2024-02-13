import {Table} from "./Table"
import {TableHeader} from "./TableHeader"
import {TableFooter} from "./TableFooter"

export function TableView() {
    return <div className="m-4">
        <div>
            Transactions | ThisMonth
        </div>
        <TableHeader/>
        <Table/>
        <TableFooter/>
    </div>
}