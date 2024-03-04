import React, { useEffect, useState } from 'react'
import { google_api_key, youtube_api } from '../utils/constant';
import VideoCard from './videoCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateCat } from '../utils/appSlice';
import Shimmer from './Shimmer';

const Main = () => {
  const videoCategory= useSelector((store)=>store.app.videoCategory);


  const [videoList, setvideoList] = useState();  
  useEffect(() => {
    getVideosList();
  }, [videoCategory]);

  async function getVideosList() {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=" + videoCategory + "&key=" + google_api_key)
    const vdata = await data.json();
    const vdata_items = await vdata.items
    setvideoList(vdata_items)
  }

  const tags = ["Exams", "Skincare", "Haul", "Recruitment", "sales head"]

  
  if (!videoList){
    return<Shimmer/>;
  } 
  else return (
    <>
      <ul className='upper-tags w-full mb-8 '>
        {tags.map(function (tag) {
          return <li key={tag}>{tag}</li>
        })}
      </ul>
      <div className='grid main-video-grid gap-x-4 gap-y-8 w-full'>
        {videoList.map(function (video) {
          return <VideoCard item={video} key={video.id} />
        })}
      </div>
    </>
  )
}

export default Main