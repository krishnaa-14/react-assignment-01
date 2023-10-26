import React, { useContext } from 'react'
import { ActiveCustomerContext } from '../App'

export default function SidebarItem({ data }) {
    const { activeCustomer, updateActiveCustomer } = useContext(ActiveCustomerContext);

    function handleChangeActiveCustomer() {
        updateActiveCustomer(data);
    }

    return (
        <button onClick={handleChangeActiveCustomer} className={(activeCustomer.id == data.id ? "bg-gray-100" : "") + " flex flex-col p-3"}>
            <span className='font-semibold text-lg'>{data.name}</span>
            <span className='font-light text-sm'>{data.title}</span>
        </button>
    )
}
