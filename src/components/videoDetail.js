import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { hideSidebar } from '../utils/appSlice';
import Comments from './comments';
import LiveChat from './liveChat';
import { google_api_key } from '../utils/constant';

const Videodetail = () => {
    const hideSidebarfn = () => dispatch(hideSidebar());
    const dispatch = useDispatch();
    // videoId
    let [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    const [commentsList, setCommentList] = useState();

    useEffect(() => {
        hideSidebarfn();
        getComments();
    }, [])

    async function getComments(){
        const comments = await fetch(" https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies%2Cid&maxResults=50&videoId=" + videoId + "&key=" + google_api_key)
        const commentData = await comments.json();
        setCommentList(commentData.items);
        console.log(commentsList)
    }
    
    return (        
        <div className='w-100 basis-full pr-3'>
            <div className='basis-full flex'>
                <div className='basis-4/6'>
                    <iframe width="950" style={{ maxWidth: "100%" }} height="500" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <div className='Comments'>
                <Comments/>
            </div>
                </div>
                <div className='basis-2/6 pl-3 pr-3'>
                    <LiveChat/>
                </div>
            </div>
        </div>

    )
 
}

export default Videodetail

// 0XDiG5lL0Dw
/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/0XDiG5lL0Dw?si=SJv9MyPQAVfRJhz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*/