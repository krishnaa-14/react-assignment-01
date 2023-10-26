import React from 'react'
import { customer_data } from '../data/customer-data'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
    return (
        <div className='w-1/4 border-r border-slate-600 h-full gap-3 overflow-y-auto flex flex-col overflow-x-hidden divide-y-2'>
            {
                customer_data.map((data, index) => (
                    <SidebarItem data={data} key={index}/>
                ))
            }
        </div>
    )
}
