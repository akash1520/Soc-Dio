import React, { useState } from 'react'
import Modal from './Modal';

export default function GetStarted() {

  const [isOpen,setIsOpen]=useState(false);



  return (
    <div className='grid grid-cols-2'>
      <div className='justify-self-center self-center'>
        <h1 className='text-4xl backdrop-blur-none my-10'>What do you want to build?</h1>
        <div className='w-96 h-96 px-5 py-5 my-10 text-xl qs font-semibold border-2 border-black'>
          <h1>Group</h1>
          <div className='px-5 my-3'>
            <h3 className='text-slate-600'>It offers</h3>
            <ul className='list-disc'>
              <li>Free voting</li>
              <li>Upgradability to Governor</li>
              <li>Centralized membership using link invitations</li>
              <li>Managing treasury with Gnosis Safe</li>
            </ul>
          </div>
          <div className='px-5 my-3'>
            <h3 className='text-slate-600'>It requires</h3>
            <ul className='list-disc'>
              <li>Nothing. It’s free and easy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='justify-self-center my-auto mx-5'>
        <button onClick={(e)=>{
          setIsOpen(true)
        }} type='button' className='rounded-full border-2 border-cyan-200 hover:bg-cyan-300 px-10 py-10 text-8xl'>Delegate Vote</button>
        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>Do you support this?</Modal>
      </div>
    </div>
  )
}
