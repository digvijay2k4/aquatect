import React from 'react'
import Link from 'next/link'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


const page = () => {
  return (
    <div className='bg-slate-50 h-screen text-slate-800 flex flex-col justify-center items-center'>
      
      <div className='flex flex-col gap-5 justify-center items-center'>
      <svg className='water' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="211" height="211" viewBox="0 0 211 211">
  <defs>
    <clipPath id="clip-path">
      <circle id="mask" cx="105.5" cy="105.5" r="105.5" transform="translate(312 -1822)" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
  </defs>
  <g id="circle" transform="translate(-312 1822)">
    <g id="bg" transform="translate(312 -1822)" fill="#fff" stroke="#707070" stroke-width="1">
      <circle cx="105.5" cy="105.5" r="105.5" stroke="none"/>
      <circle cx="105.5" cy="105.5" r="105" fill="none"/>
    </g>
    <g id="water" clip-path="url(#clip-path)">
      <path id="waveShape" d="M500,118.244v223.11H4V106.464c43.35,1.17,46.02,11.89,94.4,11.89,51.2,0,51.2-12,102.39-12s51.2,12,102.4,12,51.2-12,102.41-12C453.98,106.354,456.65,117.074,500,118.244Z" transform="translate(308 -1830.354)" fill="#04acff"/>
    </g>
  </g>
</svg>
        <h1 className='text-5xl z-10 font-bold'>Aquatect</h1>
        <h3 className='text-sm z-10 text-slate-900'>Intelligent Water Pollution Analysis and Prevention</h3>
      <Link href='\home' className=' flex items-center'>    <button className='font-thin p-4  h-4 flex justify-center items-center hover:bg-gray-900 hover:text-slate-50  duration-200 rounded-sm border border-slate-900'>Proceed</button>    </Link>
        </div>
    </div>
  )
}

export default page