import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { toggleNav } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { search_autocomplete_api } from '../utils/constant'
import { searchCache } from '../utils/searchSlice'

const Header = () => {
    const dispatch = useDispatch();
    const clickNav = () => dispatch(toggleNav());

    const [searchVal, setSearchVal] = useState("");
    const [suggestions, setSuggestions] = useState();
    const [showSuggestions, setShowSuggestions] = useState(false);

    const storeCacheResult = useSelector(store => store.search);

    const searchInput = document.getElementById("main-search")


    useEffect(() => {
        if (searchVal) {
            searchInput.value = searchVal
        }
        const timer = setTimeout(() => {
            if (storeCacheResult[searchVal]) {
                setSuggestions(storeCacheResult[searchVal]);
            }
            else {
                getSuggestions();
            };
        }, 400);
        return () => {
            clearTimeout(timer);
        }
    }, [searchVal])

    async function getSuggestions() {
        const suggest = await fetch(search_autocomplete_api + searchVal);
        const json = await suggest.json();
        setSuggestions(json[1])

        dispatch(searchCache({ [searchVal]: json[1] }));
    }

    return (
        <header className='z-99 h-16'>
            <div className='flex justify-between items-center  py-2 pl-3 pr-2 fixed left-0 right-0 top-0 z-50 bg-white '>
                <div className='flex w-1/4'>
                    <button className='nav-btn' id="nav-btn" onClick={() => clickNav()} type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <Link to="/">
                        <img src={logo} alt='logo' className='h-8 ml-4 object-contain relative top-[-1.6px]' />
                    </Link>
                </div>
                <div className='w-2/4' >
                    <div className='w-full flex'  >
                        <div className='w-full relative' >
                            <input type='search' placeholder='Search'
                                id="main-search"
                                onChange={(e) => { if (e.target.value) setSearchVal(e.target.value); }}
                                onFocus={() => setShowSuggestions(true)}
                              
                                className='py-2 px-4 border w-full rounded-l-full  border-gray-400 focus:border-gray-400 outline-none' />
                            {showSuggestions && (
                                <ul className='list-none absolute px-1 py-3 min-h-10 max-h-96 overflow-y-auto z-50 w-100 left-0 right-0 bg-white w-100 drop-shadow-lg rounded-lg border-black-200 border-1 border-t-0' 
                                onBlur={() => setShowSuggestions(false)}>
                                    {suggestions && (
                                        suggestions.map(function (suggestion) {
                                            return (<li className='hover:bg-gray-100 flex gap-3 px-4 py-1 cursor-pointer' key={"suggestion" + suggestion}
                                                onClick={(e) => {
                                                    // setSearchVal(suggestion); 
                                                    setSearchVal(suggestion);
                                                    searchInput.value = searchVal
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                </svg>
                                                <span >{suggestion}</span></li>)
                                        })
                                    )}

                                </ul>)}
                        </div>
                        <button type="button" className='py-2 px-4 bg-gray-200 rounded-r-full border  border-gray-400 border-l-transparent' id="submit_search">
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