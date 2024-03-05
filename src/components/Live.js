import React, { useEffect, useState } from 'react'
import { google_api_key } from '../utils/constant';
import { Link } from 'react-router-dom';
import {convertDurationToTime,formatViewCount,timeAgo} from "../utils/helper.js"
import Shimmer, { ShimmerCard } from './Shimmer';

const Live = () => {

  const [liveVideos, setLiveVideos] = useState();
  async function getLivelist() {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&q=news&type=video&key=" + google_api_key)
    const jsondata = await data.json();
    setLiveVideos(jsondata.items);
    console.log(liveVideos)
  }
  
  useEffect(() => {
    getLivelist();
  },[])
  return (liveVideos)?
   (
    <div>
      <ul className='upper-tags w-full mb-8 '>
        <li><Link to="/live">Live</Link></li>
        <li><Link to="/subscriptions">Subscriptions</Link></li>
        <li><Link to="/">Trending</Link></li>
        {/* {tags.map(function (tag) {
          return <li key={tag}>{tag}</li>
        })} */}
      </ul>
       <div className='grid main-video-grid gap-x-4 gap-y-8 w-full'>
        {liveVideos.map(function (video) {
          console.log(video)
          return <LiveVideoCard item={video} key={video?.item?.id.videoId} />
        })}
      </div>
    </div>
  ):<Shimmer/>;
}


const LiveVideoCard = (video) => {
  console.log(video)
  const { snippet, id, contentDetails } = video?.item;
  const { thumbnails, title, channelTitle ,publishedAt,liveBroadcastContent} = snippet
  return (
      <Link to={"/watch?v="+ id.videoId} key={"ji"+ id} className='w-100 cursor-pointer'>
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
              <span className='basis-auto bg-gray-400 rounded-full sm:w-9 sm:h-9 h-8 w-8'></span>
              <div className=' basis-5/6 col-span-11 pt-1'>
                  <p className='font-medium text-black line-clamp-2'>{title}</p>
                  <p key={channelTitle + id} className='text-gray-500 text-sm line-clamp-1'>{channelTitle}</p>
                  <p key={"views" + id} className='text-gray-500 text-sm flex gap-1'>
                      <span>{timeAgo(publishedAt)}</span>&bull; <span className='text-red-600'>Live</span>
                  </p>
              </div>
          </div>
      </Link>
  )
}

export default Live