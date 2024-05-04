import React from 'react'
import RevenueCard from "./RevenueCard"
import { Dropdown } from '../feature/Dropdown';

function Overview() {
    const options = [
        { label: 'This Month', value: 'thisMonth' },
        { label: 'Last Month', value: 'lastMonth' },
    ];
     
    const [value, setValue] = React.useState('lastMonth');
     
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className='grid gap-6'>
            <div className='flex justify-between items-center'>
                <div className="text-xl font-medium">Overview</div>
                <Dropdown
                    className='grid grid-flow-col p-1 items-center rounded border border-black-150'
                    label=""
                    options={options}
                    value={value}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                <RevenueCard title={"Online orders"} amount={"231"} />
                <RevenueCard title={"Amount received"} amount={"₹23,92,312.19"} />
            </div>
        </div>
    )
}

export default Overview