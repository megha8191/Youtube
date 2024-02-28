import React, { useEffect, useState } from 'react'
import { youtube_api } from '../utils/constant';
import VideoCard from './videoCard';
const Main = () => {

  const [videoList, setvideoList] = useState([]);
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(youtube_api);
    const vdata = await data.json();
    const vdata_items = await vdata.items
    setvideoList(vdata_items)
  }

  const tags = ["Exams", "Skincare", "Haul", "Recruitment", "sales head"]

  if (!videoList) return "Loading";
  else return (
    <>
      <ul className='upper-tags w-full mb-8'>
       
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