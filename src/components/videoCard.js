import React from 'react'
import { Link } from 'react-router-dom';
import {convertDurationToTime,formatViewCount} from "../utils/helper.js"

const VideoCard = (video) => {
    // console.log(video)
    const { statistics, snippet, id, contentDetails } = video.item;
    const { thumbnails, title, channelTitle } = snippet
    return (
        <Link to={"/watch?v="+ id} key={"ji"+ id} className='w-100 cursor-pointer'>
            <div className='relative rounded-lg overflow-hidden'>
                <img className="w-full" src={thumbnails?.medium?.url || thumbnails?.maxres?.url} alt='thumbnail' />
                <p className='text-xs bg-black text-white absolute bottom-1 py-1 px-2 rounded right-1 '>{convertDurationToTime(contentDetails.duration)}</p>
            </div>
            <div className='w-100 flex pt-3 sm:gap-3 gap-2'>
                <span className='basis-auto bg-gray-400 rounded-full sm:w-9 sm:h-9 h-8 w-8'></span>
                <div className=' basis-5/6 col-span-11 pt-1'>
                    <p className='font-medium text-black line-clamp-2'>{title}</p>
                    <p key={channelTitle + id} className='text-gray-500 text-sm line-clamp-1'>{channelTitle}</p>
                    <p key={"views" + id} className='text-gray-500 text-sm'>
                        <span>{formatViewCount(statistics.viewCount)} views</span> <span>1 day ago</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard