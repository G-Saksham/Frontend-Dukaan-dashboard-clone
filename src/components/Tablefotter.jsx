export function Tablefotter() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center mb-5 mt-3 text-md gap-4">
                <div className="flex border rounded-sm border-black-200 text-black-300 px-2 py-1">
                    <div className="flex flex-col justify-center pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    Previous
                </div>
                <div className="flex gap-4 justify-center text-black-300">
                    <div className="flex flex-col justify-center">1</div>
                    <div className="flex flex-col justify-center">...</div>
                    <div className="flex flex-col justify-center bg-blue-500 text-[#ffffff] rounded-md my-0.5 px-1">10</div>
                    <div className="flex flex-col justify-center">11</div>
                    <div className="flex flex-col justify-center">12</div>
                    <div className="flex flex-col justify-center">13</div>
                    <div className="flex flex-col justify-center">14</div>
                    <div className="flex flex-col justify-center">15</div>
                    <div className="flex flex-col justify-center">16</div>
                    <div className="flex flex-col justify-center">17</div>
                    <div className="flex flex-col justify-center">18</div>
                </div>
                <div className="flex border rounded-sm border-black-200 text-black-300 px-2 py-1">
                    Next
                    <div className="flex flex-col justify-center pl-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}