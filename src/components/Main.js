import React, { useEffect, useState } from 'react'
import { google_api_key, youtube_api } from '../utils/constant';
import VideoCard from "./videoCard"
import { useDispatch, useSelector } from 'react-redux';
import { updateCat } from '../utils/appSlice';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Main = () => {
  const videoCategory = useSelector((store) => store.app.videoCategory);
  const [channelInfo, setChannelInfo] = useState();
  const [videoList, setvideoList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getVideosList();
    };
    fetchData();
  }, [videoCategory]);


  async function getVideosList() {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CliveStreamingDetails&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=" + videoCategory + "&key=" + google_api_key)
    const json = await data.json();
    const videoList = await json.items;
    if (videoList) {
      setvideoList(videoList);
    }
  }

  async function getChannelDetail(channelId) {
    async function getChannel(channelId) {
      const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + channelId + "&key=" + google_api_key)
      const jsondata = await data.json();
      return jsondata.items[0]; // Return the first item directly
    }
  
    const channel = await getChannel(channelId);
    return channel;
  }
  
  // const tags = ["Exams", "Skincare", "Haul", "Recruitment", "sales head"]

  if (!videoList) {
    return <Shimmer />;
  }
  else return (
    <>
      <ul className='upper-tags w-full mb-8 '>
        <li><Link to="/live">Live</Link></li>
        <li><Link to="/subscriptions">Subscriptions</Link></li>
        {/* {tags.map(function (tag) {
          return <li key={tag}>{tag}</li>
        })} */}
      </ul>
      <div className='grid main-video-grid gap-x-4 gap-y-8 w-full'>
        {videoList.map(function (video) {
          return <VideoCard item={video} key={video.id} channel={ getChannelDetail(video?.snippet?.channelId)} />
        })}
      </div>
    </>
  )
}

export default Main