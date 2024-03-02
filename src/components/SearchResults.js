import React, { useEffect, useState } from 'react'
import { SearchShimmer } from './Shimmer'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams ,useNavigate} from 'react-router-dom'
import { google_api_key } from '../utils/constant'
import { storeResults} from '../utils/searchSlice'
import VideoCardStyle2 from './videoCardStyle2'

const SearchResults = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get("searchQuery")
    // const results = useSelector((store)=>store.search.results)
    const [SearchResults, setSearchResults] = useState();

    async function getSearchResults() {
        const searchfetch = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=" + searchQuery + "&key=" + google_api_key);
        const searchData = await searchfetch.json();
        setSearchResults(searchData.items);
        dispatch(storeResults(searchData.items))
    }

    useEffect(()=>{
        getSearchResults();
    },[searchQuery])

    return (!SearchResults)? <div className="lg:px-4 px-3 max-w-7xl mx-auto"><SearchShimmer/></div>:(
        <div className="lg:px-4 px-3 max-w-7xl mx-auto">
            {SearchResults.map(function(item){
                return <VideoCardStyle2 item={item} key={item.id}/>
            })}
            <div className='lg:grid-cols-[360px,1fr,auto] grid-cols-[240px,1fr,auto] sm:grid w-full gap-4 mt-4'>
                <div className='relative w-full'>
                    <p className="text-xs bg-black bg-opacity-80 text-white absolute bottom-1 py-1 px-2 rounded right-1 ">2h 41m</p>
                    <img className='w-full rounded-lg object-cover lg:h-52 md:h-40 sm:h-44 h-56 ' src="https://i.ytimg.com/vi/xWkqjXjD73E/mqdefault.jpg" alt="thumbnail" />
                </div>
                <div className='py-1'>
                    <h3 className='font-medium md:text-xl text-lg line-clamp-2'>Top 12 React Interview Questions 🔥 for Freshers & Experienced | Preparation 2024</h3>
                    <p className="text-gray-500 font-xs pt-1 -mt-1 gap-1 inline-flex flex-wrap line-clamp-1"><span>33k views</span> &bull; <span>8 months ago</span></p>
                    <div className="w-100 flex sm:my-3 my-1 gap-2 items-center">
                        <span className="basis-auto bg-gray-400 rounded-full w-7 h-7"></span>
                        <div className=" basis-5/6 col-span-11 ">
                            <p className="text-gray-500 font-xs">Miley Cyrus</p>
                         </div>
                    </div>
                    <p className='font-xs text-gray-600 line-clamp-1'>In this video, we cover 10 key React interview questions, including React's uniqueness, component lifecycle, virtual DOM, data ...</p>
                </div>
                <div className='basis-1 pt-1 md:block hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default SearchResults