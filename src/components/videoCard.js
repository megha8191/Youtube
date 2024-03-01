import React from 'react'
import { Link } from 'react-router-dom';


function convertDurationToTime(duration) {
    const timeArray = duration.match(/\d+/g);
    return timeArray.map((unit, index) => (index === 0 ? unit + 'h ' : index === 1 ? unit + 'm ' : unit + 's')).join('').trim();
}

function formatViewCount(viewCount) {
    const num = parseInt(viewCount, 10);
    return isNaN(num) ? viewCount : num < 1e3 ? num : `${Math.floor(num / 1e3)}k`;
}

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
            <div className='w-100 flex pt-3 gap-3'>
                <span className='basis-auto bg-gray-400 rounded-full w-9 h-9'></span>
                <div className=' basis-5/6 col-span-11 pt-1'>
                    <p className='font-medium text-black'>{title}</p>
                    <p key={channelTitle + id} className='text-gray-500 font-xs'>{channelTitle}</p>
                    <p key={"views" + id} className='text-gray-500 font-xs'>
                        <span>{formatViewCount(statistics.viewCount)} </span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard