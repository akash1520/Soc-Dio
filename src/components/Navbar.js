import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Carousel } from './Carousel'
import { slides } from './CarouselData'


export default function Navbar() {
    return (
        <>
            <div className='bg-black py-5 list-none baloo text-blue-50'>
            <div className='inline-flex'>
                <li className='mx-4'><Link to="/home">Home</Link></li>
                <li className='mx-4'><Link to="/support">Support</Link></li>
                <li className='mx-4'><Link to="/getStarted">GetStarted</Link></li>
            </div>
                <button className='float-right mx-4 border-2 -my-1 px-1 py-1'>Connect Wallet</button>
            </div>
            <Carousel slides={slides}/>
            <Outlet />
        </>
    )
}
