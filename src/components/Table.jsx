import { Tablefotter } from './Tablefotter'
import Tabletop from './Tabletop'
import { orderData } from './data'

function Table() {

    return (
        <div className='bg-white-500 px-3 pt-3 pb-2 rounded-lg grid gap-4'>
            <Tabletop />
            <div className="relative overflow-x-auto rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg">
                    <thead className="bg-black-100 text-xm font-medium rounded-lg">
                        <tr className='rounded-lg'>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Order ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-center font-medium">
                                <div className='flex justify-center'>
                                    Order date
                                    <div className='p-1 py-2'>
                                        <svg width="8" height="8" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11092 8.50209C7.51563 9.15823 6.48437 9.15823 5.88908 8.50209L0.615075 2.68901C-0.259446 1.7251 0.424491 0.181107 1.72599 0.181107L12.274 0.181108C13.5755 0.181108 14.2594 1.7251 13.3849 2.68901L8.11092 8.50209Z" fill="#4D4D4D" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-right font-medium">
                                Order amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-right font-medium">
                                <div className='flex justify-end'>
                                Transaction fees
                                    <div className='p-0.5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {orderData.map((order,index) => {
                        return (
                            <tbody key={index}>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap">
                                        #{order.orderId}
                                    </th>
                                    <td className="px-6 py-4 text-center text-black-default">
                                        {order.orderDate}
                                    </td>
                                    <td className="px-6 py-4 text-right text-black-default">
                                        ₹{order.orderAmount}
                                    </td>
                                    <td className="px-6 py-4 text-right text-black-default">
                                        ₹{order.transactionFees}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}

                </table>
            </div>
            <Tablefotter/>        
        </div>
    )
}

export default Table