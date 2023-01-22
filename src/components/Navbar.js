import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <div className='grid grid-cols-5 bg-black text-white py-3'>
                <div className='col-span-4 flex list-none'>
                    <li className='mx-4'><Link to="/home">Home</Link></li>
                    <li className='mx-4'><Link to="/support">Support</Link></li>
                    <li className='mx-4'><Link to="/getStarted">GetStarted</Link></li>
                </div>
                <div className='col-start-5 hover:bg-slate-600 hover:scale-x-105 border-2 px-1 justify-self-center'><button>Connect Wallet</button></div>
            </div>
            <Outlet />
        </>
    )
}


