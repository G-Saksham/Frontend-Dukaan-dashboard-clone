import {Card} from './Card'

export function CardView ({months}) {
    return <div className = "m-4 grid bg-slate-50">    
        <div className = "flex justify-between">
            <div className="p-2 pl-0 font-mono font-semibold text-base">Overview</div>
            <div className="bg-white flex font-mono font-light text-zinc-700 p-1 border rounded-sm border-zinc-300 pb-0 ">
                <div className="text-xs">{months}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
            </div>
        </div>
        <div className='grid sm grid-cols-2'>
        <Card textType = {"Online orders"} count = {"231"} />
        <Card textType = {"Amount received"} count = {"₹23,92,312.19"} />
        </div>
    </div>
}