import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {convertDurationToTime,formatViewCount,timeAgo} from "../utils/helper.js"

const VideoCard = ({ item: video, channel })=> {
    const [channelData,setchannelData]=useState();
    useEffect(() => {
        const fetchData = async () => {
          const channelData = await channel;
          setchannelData(channelData)
        };
        fetchData();
      }, [channel]);
    const { statistics, snippet, id, contentDetails } = video;
    const { thumbnails, title, channelTitle ,publishedAt,liveBroadcastContent} = snippet
    return (
        <Link to={"/watch?v="+ id} key={"videoItem"+ id} className='w-100 cursor-pointer'>
            <div className='relative rounded-lg overflow-hidden'>
                {(liveBroadcastContent === "live") ? <p className="text-base bg-red-600  text-white absolute bottom-1 py-1 px-3 rounded right-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-1 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className='first-letter:uppercase '>{liveBroadcastContent}</span></p> : ""}
                <img className="w-full" src={thumbnails?.medium?.url} alt='thumbnail' />
                {(contentDetails?.duration) && <p className='text-xs bg-black text-white absolute bottom-1 py-1 px-2 rounded right-1 '>{convertDurationToTime(contentDetails?.duration)}</p>}
            </div>
            <div className='w-100 flex pt-3 sm:gap-3 gap-2'>
                <img src={channelData?.snippet?.thumbnails?.medium?.url}  className='basis-auto bg-gray-400 rounded-full sm:w-9 sm:h-9 h-8 w-8'/>
                <div className=' basis-5/6 col-span-11 pt-1'>
                    <p className='font-medium text-black line-clamp-2'>{title}</p>
                    <p key={channelTitle + id} className='text-gray-500 text-sm line-clamp-1'>{channelTitle}</p>
                    <p key={"views" + id} className='text-gray-500 text-sm flex gap-1'>
                        <span>{formatViewCount(statistics?.viewCount)} views</span>&bull;<span>{timeAgo(publishedAt)}</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard