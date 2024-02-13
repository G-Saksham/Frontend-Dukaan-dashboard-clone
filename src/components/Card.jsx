export function Card( {textType , count} ) {
    return <div>
        <div className=" bg-white grid-cols-1 p-3 shadow-sm m-2 shadow-zinc-300 rounded">
            <p className = "font-mono font-light text-xs text-zinc-700" >{textType}</p>
            <p className = "font-mono font-semibold text-xl" >{count}</p>
        </div>
    </div>
}