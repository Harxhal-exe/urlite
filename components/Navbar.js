import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-15 bg-blue-600 text-white flex justify-between px-4 items-center'>
            <div className="logo font-bold text-2xl">
                <h1>URLite</h1>
            </div>
            <ul className='flex justify-center items-center gap-5'>
                <Link href="/"><li className='cursor-pointer hover:underline'>Home</li></Link>
                <Link href="/shorten"><li className='cursor-pointer hover:underline'>Shorten</li></Link>
                <Link href="/about"><li className='cursor-pointer hover:underline'>About</li></Link>
                <Link href="/contact"><li className='cursor-pointer hover:underline'>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shorten"><button className='hover:bg-blue-300 bg-blue-500 shadow-lg p-3 rounded-lg py-1 font-bold cursor-pointer'>Try Now</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
