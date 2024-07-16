import { Link } from "react-router-dom"
import React from 'react'

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
                <Link to="/">
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Digi</span>
                        <span className='text-red-900'>Med</span>
                        <span className='text-slate-500'>Sync</span>
                    </h1>
                </Link>
                <ul className="flex gap-4">
                    <Link to="/">
                        <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                    </Link>
                    <Link to="/contact">
                        <li className="hidden sm:inline text-slate-700 hover:underline">Contact</li>
                    </Link>
                    <Link to="/sign-in">
                        <li className="text-slate-700 hover:underline">Sign In</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header