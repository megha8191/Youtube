import React, { useEffect, useState } from 'react'
import { google_api_key } from '../utils/constant'
import { Link } from 'react-router-dom'
import { timeAgo,formatViewCount } from '../utils/helper'

const RelatableVideoCard =({video})=>{
    console.log(video)
    const { statistics, snippet, id } = video;
    const { thumbnails, title, channelTitle ,publishedAt} = snippet;
    return (
    <Link to={"/watch?v="+ id} key={"relate"+ id} className=" xl-grid-cols-[160px,1fr] lg:grid-cols-[140px,1fr] grid sm:grid-cols-[200px,1fr] grid-cols-[1fr] w-full lg:gap-2 sm:gap-3 gap-3 sm:mt-4 mt-5">
        <div className="relative w-full">
            <img className="w-full rounded-lg object-cover lg:h-24 h-30 " src={thumbnails?.medium?.url || thumbnails?.maxres?.url} alt="thumbnail" />
        </div>
        <div className="pb-1 pt-0">
            <h3 className="font-medium text-[15px] line-clamp-2">{title}</h3>
            <div className="mt-1">
                <p className="text-gray-500 text-xs">{channelTitle}</p>
                <p className='text-gray-500 text-xs gap-1 line-clamp-1'>
                    <span>{formatViewCount(statistics.viewCount)} views</span>&bull;<span>{timeAgo(publishedAt)}</span>
                </p>
            </div>
        </div>
        <div className="basis-1 pt-1 hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path></svg>
        </div>
    </Link>
    )

}

const Recommended = ({related,notof}) => {
    const [recommendedList,setRecommendedList]=useState();

    async function getVideosList() {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CliveStreamingDetails&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=" + related + "&key=" + google_api_key)
        const vdata = await data.json();
        setRecommendedList(vdata.items)
        if(recommendedList)
        console.log(recommendedList)
    }

    useEffect(()=>{
        getVideosList();
    },[])

    return (!recommendedList)?"Load": (
    <div>
        {recommendedList.map(function(video){
            return (video.id===notof)?"":<RelatableVideoCard video={video} key={video?.id}/>
        })}
    </div>
  )
}

export default Recommended