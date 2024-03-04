import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import { hideSidebar, toggleNav } from '../utils/appSlice';
import Comments from './comments';
import LiveChat from './liveChat';
import { google_api_key } from '../utils/constant';
import { formatViewCount } from '../utils/helper';

const Videodetail = () => {
    const hideSidebars = () => dispatch(hideSidebar());
    const dispatch = useDispatch();
    // videoId
    let [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const [videoInfo, setVideoInfo] = useState();
    const [commentsList, setCommentList] = useState();

    useEffect(() => {
        hideSidebars();
        getVideoInfo();
        getComments();
        return () => {
            dispatch(toggleNav());
        };
    }, [])

    async function getVideoInfo() {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&suggestions&id=" + videoId + "&key=" + google_api_key)
        const videoData = await data.json();
        setVideoInfo(videoData.items[0]);
    }

    async function getComments() {
        const comments = await fetch(" https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies%2Cid&maxResults=50&videoId=" + videoId + "&key=" + google_api_key)
        const commentData = await comments.json();
        setCommentList(commentData.items);
    }
    // async function getVideosList() {
    //     const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=" + videoCategory + "&key=" + google_api_key)
    //     const vdata = await data.json();
    //     const vdata_items = await vdata.items
    //     setvideoList(vdata_items)
    // }

    if(!videoInfo)
    return null
    else{
        const {likeCount,commentCount}=videoInfo.statistics;
        const {title,description,channelTitle} =videoInfo.snippet;
    return (
        <div className='w-100 basis-full pr-3 max-w-screen-2xl mx-auto'>
            <div className='basis-full grid lg:grid-cols-[1fr,400px] md:grid-cols-[1fr,360px] grid-cols-1 gap-3'>
                <div className='w-100'>
                    <div className='videoInformation'>
                        <iframe width="100%" style={{ maxWidth: "100%", borderRadius: "8px" }} height="500" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h3 className='font-bold sm:text-xl text-lg lg:mt-3 mt-2'>{title}</h3>
                        <div className='grid grid-cols-[auto,1fr] gap-2 mt-3'>
                            <div className='flex items-center lg:gap-6 gap-4'>
                                <div className=" flex sm:gap-2 gap-1 items-start">
                                    <span className="basis-auto block bg-gray-400 rounded-full w-8 h-8"></span>
                                    <div className=" basis-auto grow ">
                                        <p className="font-medium mb-0 -mt-[2px]">{channelTitle}</p>
                                        <p className="text-gray-500 text-xs h-3">10M Subscribers</p>
                                    </div>
                                </div>
                                <button className='basis-auto bg-black hover:bg-opacity-90 text-white py-2 px-4 text-sm rounded-full'>Subscribe</button>
                            </div>
                            <div className='videoActions ml-auto flex gap-2'>
                                <div className='bg-gray-100  rounded-full w-auto inline-block'>
                                    <button className='px-4 gap-1 py-2 border-r border-r-gray-200 inline-flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                        </svg>
                                        <span className='text-sm'>{formatViewCount(likeCount)}</span>
                                    </button>
                                    <button className='px-4 gap-1 py-2 inline-flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                        </svg>
                                    </button>
                                </div>
                                <button className='bg-gray-100 inline-flex items-center gap-2 py-2 px-3 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                    <span className='text-sm '>Share</span>
                                </button>
                            </div>
                        </div>
                        <div className='descriptionBox bg-gray-100 p-2 mt-4 rounded-2xl'>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </div>
                    </div>
                    <div className='Comments'>
                        <p className="text-xl font-bold mt-8">{commentCount} Comments</p>
                        {(commentsList) ? (
                            commentsList.map(function (item) {
                                return (<Comments info={item} key={item.id} />)
                            })
                        ) : "loading"}
                    </div>
                </div>
                <div className='pl-3 pr-3'>
                    <LiveChat />
                    {
                        <Link to="/watch?v=" className=" grid-cols-[160px,1fr] sm:grid w-full gap-2 mt-4">
                            <div className="relative w-full">
                                <img className="w-full rounded-lg object-cover h-24 " src="https://i.ytimg.com/vi/jwYRwOj9RdA/mqdefault.jpg" alt="thumbnail" />
                            </div>
                            <div className="pb-1 pt-0">
                                <h3 className="font-medium text-[15px] line-clamp-2">OKE GAS PRABOWO GIBRAN PALING PAS</h3>
                                <div className="mt-1">
                                    <p className="text-gray-500 text-xs">Richard Jersey</p>
                                    <p className='text-gray-500 text-xs'>
                                        <span> views</span> &bull; <span>1 day ago</span>
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1 pt-1 hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path></svg>
                            </div>
                        </Link>
                    }
                </div>
            </div>
        </div>

    )
                }
}

export default Videodetail

// 0XDiG5lL0Dw
/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/0XDiG5lL0Dw?si=SJv9MyPQAVfRJhz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*/