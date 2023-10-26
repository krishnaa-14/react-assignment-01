import { useState, createContext } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import CustomerDisplay from './components/CustomerDisplay'
import { customer_data } from './data/customer-data';

export const ActiveCustomerContext = createContext();

function App() {
    const [activeCustomer, setActiveCustomer] = useState(customer_data[0]);

    function updateActiveCustomer(newCustomer) {
        setActiveCustomer(newCustomer);
    }

    return (
        <ActiveCustomerContext.Provider value={{ activeCustomer, updateActiveCustomer }}>
            <header className='text-center h-[10vh] flex items-center justify-center font-bold text-xl'>
                <h1>This here is the heading</h1>
            </header>
            <main className='flex flex-row w-full h-[90vh] border-t border-slate-600'>
                <Sidebar/>
                <CustomerDisplay/>
            </main>                    
        </ActiveCustomerContext.Provider>
    )
}

export default App
