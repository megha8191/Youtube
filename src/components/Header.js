import React from 'react'
import logo from "../assets/logo.png"
import { toggleNav } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
const dispatch = useDispatch();

 const clickNav=()=>dispatch(toggleNav());

    return (
        <header className='bg-white  py-2 pl-3 pr-2'>
            <div className='flex justify-between items-center'>
                <div className='flex w-1/4'>
                    <button className='nav-btn' id="nav-btn" onClick= {()=>clickNav()} type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <Link to="/">
                        <img src={logo} alt='logo' className='h-8 ml-4 object-contain relative top-[-1.6px]' />
                    </Link>
                </div>
                <div className= 'w-2/4' >
                    <div className='w-full flex'>
                        <input type='search' placeholder='Search' className='py-2  px-4 border rounded-l-full w-3/4 border-gray-400 focus:border-gray-400 outline-none' />
                        <button className='py-2 px-4 bg-gray-200 rounded-r-full border  border-gray-400 border-l-transparent'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='w-1/4 text-right'>
                    <img className='h-10 ml-auto block' src="https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt="user-img" />
                </div>
            </div>
        </header>
    )
}

export default Header