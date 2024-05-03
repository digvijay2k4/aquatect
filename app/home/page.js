import React from 'react'
import Link from 'next/link'
import { AiOutlineLineChart } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineControl } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
const page = () => {
  return (
    <div className='h-screen grid grid-cols-2 w-screen text-2xl font-thin'>
       <div className=' flex gap-1 items-center justify-center border hover:bg-slate-900 hover:text-slate-50 border-slate-400 duration-200'>
       <AiOutlineLineChart className='' />
    <Link href='\home\statistics'>    Statistics  </Link>
       </div>
       <div className=' flex gap-1 items-center justify-center border hover:bg-slate-900 hover:text-slate-50 border-slate-400 duration-200'>
        <GiBookshelf />
      <Link href='\home\resources'>   Resources </Link>
        </div>
        <div className=' flex gap-1 items-center justify-center border hover:bg-slate-900 hover:text-slate-50 border-slate-400 duration-200'>
        <AiOutlineControl />
    <Link href='\home\dashboard'>   Dashboard </Link>
       </div>
       <div className=' flex gap-1 items-center justify-center border hover:bg-slate-900 hover:text-slate-50 border-slate-400 duration-200'>
        <MdDeveloperMode /> 
       <Link href='\home\about'>  About Us </Link>
       </div>

    </div>
  )
}

export default page