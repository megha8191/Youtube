import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { toggleNav } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { search_autocomplete_api } from '../utils/constant'
import { searchCache } from '../utils/searchSlice'
import { hideSidebar } from '../utils/appSlice'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickNav = () => dispatch(toggleNav());

    const [searchVal, setSearchVal] = useState("");
    const [suggestions, setSuggestions] = useState();
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const []

    const storeCacheResult = useSelector(store => store.search);
    const searchInput = document.getElementById("main-search")

    function goSearchPage(suggestion) {
        setMobileSearch(false)
        if (navigate) {
            navigate("/results?searchQuery=" + encodeURIComponent(suggestion));
        } else {
            window.location.href = "/results?searchQuery=" + encodeURIComponent(suggestion);
        }
    }

    async function getSuggestions() {
        try{
        const suggest = await fetch(search_autocomplete_api + searchVal);
        const json = await suggest.json();
        setSuggestions(json[1])
        dispatch(searchCache({ [searchVal]: json[1] }));
        }
        catch{
            console.error("error fetching search suggestions api")
        }
    }

    const isOpen = useSelector(store => store.app.isOpen)
    
    const handleResize = () => {
        if (window.innerWidth < 1024 && isOpen) {
            dispatch(hideSidebar());
        }
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (searchVal) {
            searchInput.value = searchVal
        }
        const timer = setTimeout(() => {
            if (storeCacheResult[searchVal]) { setSuggestions(storeCacheResult[searchVal]); }
            else { getSuggestions(); };
        }, 400);

        return () => {
            clearTimeout(timer);
        }
    }, [searchVal])

    const [mobileSearch, setMobileSearch] = useState(false)
    return (
        <header className='z-99 h-14 lg:h-16'>
            <div className='grid grid-cols-[auto,1fr,auto] items-center sm:gap-3 gap-2 py-2 px-3 fixed left-0 right-0 top-0 z-50 bg-white '>
                <div className='first-col flex lg:gap-4 sm:gap-3 gap-2'>
                    <button className='nav-btn lg:ml-2' id="nav-btn" onClick={() => clickNav()} type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <Link to="/">
                        <img src={logo} alt='logo' className='sm:h-8 h-7 object-contain relative top-[-1.6px]' />
                    </Link>
                </div>
                <div className='max-w-2xl mx-auto w-full' >
                    <button type="button" onClick={() =>{dispatch(hideSidebar()); setMobileSearch(true)}} className='cursor-pointer min-h-10 p-1 sm:hidden ml-auto block' id="mobile-search">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-6 sm:h-6 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <form name='search' 
                    className={(mobileSearch) ? 'mb-0 w-100 search-mobile' : ' mb-0 w-100 search-mb'} id='searchForm' onSubmit={(e) => {
                        e.preventDefault();
                        goSearchPage(searchVal);
                    }
                    } >
                    {/* <div className={(mobileSearch) ? 'mb-0 w-100 search-mobile' : ' mb-0 w-100 search-mb'} id='searchForm'> */}
                        <div className='w-full relative'  >
                            <input type='search' required placeholder='Search me'
                            name='search'
                                id="main-search"
                                onChange={(e) => {
                                    const inputValue = e.target.value.trim();
                                        if (inputValue) {
                                            setSearchVal(e.target.value);
                                            setShowSuggestions(true)
                                        }
                                        else {
                                        setSearchVal('');
                                        setShowSuggestions(false)
                                    }
                                }}
                                // onChange={(e) => {
                                //     console.log("hi")
                                //     const inputValue = e.target.value.trim();
                                //     if (inputValue) {
                                //         setSearchVal(inputValue);
                                //         setShowSuggestions(true);
                                //         // const updatedSuggestions = // your logic to filter suggestions based on inputValue
                                //         // setSuggestions(updatedSuggestions);
                                //     } else {
                                //         setSearchVal('');
                                //         setShowSuggestions(false);
                                //     }
                                // }}
                                onFocus={(e) => {
                                    if (searchVal) {
                                        setShowSuggestions(true)
                                    }
                                }}
                                onBlur={() => setShowSuggestions(false)}
                                className='py-2 px-4 border w-full rounded-l-full  border-gray-300 focus:border-gray-300 outline-none'
                            />
                            {showSuggestions && (
                                <ul className='list-none absolute px-1 py-3 min-h-10 max-h-96 overflow-y-auto z-50 w-100 left-0 right-0 bg-white w-100 drop-shadow-lg rounded-lg border-black-200 border-1 border-t-0'
                                    onBlur={() => setShowSuggestions(false)}>
                                    {(suggestions?.length > 0) ? (
                                        suggestions.map(function (suggestion) {
                                            return (<li className='hover:bg-gray-100 flex gap-3 px-4 py-1 cursor-pointer' key={"suggestion" + suggestion}
                                                onMouseDown={(e) => {
                                                    setSearchVal(suggestion)
                                                    goSearchPage(suggestion);
                                                }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                </svg>
                                                <span >{suggestion}</span></li>)
                                        })
                                    ) : setShowSuggestions(false)}
                                </ul>)}
                        </div>
                        <button type="submit" className='py-2 md:px-4 px-3 bg-gray-100 rounded-r-full border  border-gray-300 border-l-transparent' id="submit_search" onClick={()=> goSearchPage(searchVal)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-6 sm:h-6 h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        <button className='sm:hidden inline-block' type='button' onClick={()=>setMobileSearch(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </form>
                    </div>
                <div className='text-right flex sm:gap-4 gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-6 sm:h-6 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-6 sm:h-6 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <span className="basis-auto bg-gray-400 rounded-full sm:w-9 sm:h-9 h-8 w-8"></span>
                </div>
            </div>
        </header>
    )
}

export default Header