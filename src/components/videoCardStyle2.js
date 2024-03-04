import React from 'react'
import { Link } from 'react-router-dom';

const VideoCardStyle2 = ({ item }) => {
    const { snippet, id } = item;
    const { thumbnails, title, channelTitle, description, liveBroadcastContent } = snippet;

    return (
        <Link to={"/watch?v=" + id.videoId} className='lg:grid-cols-[360px,1fr,auto] grid-cols-[240px,1fr,auto] sm:grid w-full gap-4 mt-4'>
            <div className='relative w-full'>
                {(liveBroadcastContent === "live") ? <p className="text-base bg-red-600  text-white absolute bottom-1 py-1 px-3 rounded right-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-1 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className='first-letter:uppercase '>{liveBroadcastContent}</span></p> : ""}
                <img className='w-full rounded-lg object-cover lg:h-52 md:h-40 sm:h-44 h-56 ' src={thumbnails?.medium?.url || thumbnails?.maxres?.url} alt="thumbnail" />
            </div>
            <div className='py-1'>
                <h3 className='font-medium md:text-xl text-lg line-clamp-2'>{title}</h3>
                {/* <p className="text-gray-500 text-sm pt-1 -mt-1 gap-1 inline-flex flex-wrap line-clamp-1"><span>{formatViewCount(statistics.viewCount)}  views</span> &bull; <span>8 months ago</span></p> */}
                <div className="w-100 flex sm:my-3 my-1 gap-2 items-center">
                    <span className="basis-auto bg-gray-400 rounded-full w-7 h-7"></span>
                    <div className=" basis-5/6 col-span-11 ">
                        <p className="text-gray-500 text-sm">{channelTitle}</p>
                    </div>
                </div>
                <p className='text-sm text-gray-600 line-clamp-1'>{description}</p>
            </div>
            <div className='basis-1 pt-1 md:block hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </div>
        </Link>
    )
}

export default VideoCardStyle2