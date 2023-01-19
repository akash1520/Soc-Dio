import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import homeHeader from '../components/home-header.d7f6bc25.svg'
import { Carousel } from './Carousel'
import {slides} from './CarouselData'




export default function Home() {

    const navigate=useNavigate()

    return (
        <>
        <Carousel slides={slides}/>
        <div className='qs grid grid-cols-2 shrink font-medium gradd-bg text-white'>
            <div className='py-36 px-5'>
                <h1 className='text-5xl'>Run DAOs <span>on-chain</span></h1>
                <h1>OurName is a platform for on-chain decentralized organizations</h1>
                <div>
                    <button className='border-2 py-1 px-2 mr-2 my-2 hover:scale-105 hover:bg-black'>Read Docs</button>
                    <button onClick={()=>navigate("/getStarted")}className='border-2 py-1 px-2 mr-2 my-2 hover:scale-105 bg-black border-black hover:bg-white hover:text-black'>Start Now</button>

                </div>
            </div>
            <div className='self-center'>
                <img src={homeHeader} style={{ width: "100%" }} className="ml-25 py-5" />
            </div>
        </div>
        </>

    )
}
