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

    async function getComments() {
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
                        {(commentsList)? (
                            commentsList.map(function(item){
                                return (<Comments info ={item} key={item.id} />)
                            })
                        ):"loading"}
                    </div>
                </div>
                <div className='basis-2/6 pl-3 pr-3'>
                    <LiveChat />
                    {
                        // 
                        <a className=" grid-cols-[minmax(auto,210px),1fr,auto] sm:grid w-full gap-2 mt-4" href="/watch?v=jwYRwOj9RdA">
                            <div className="relative w-full">
                                <img className="w-full rounded-lg object-cover4 h-38 " src="https://i.ytimg.com/vi/jwYRwOj9RdA/mqdefault.jpg" alt="thumbnail" />
                            </div>
                            <div className="pb-1 pt-0">
                                <h3 className="font-medium text-lg line-clamp-2">OKE GAS PRABOWO GIBRAN PALING PAS</h3>
                                <div className="w-100 flex mt-2 mb-2 gap-2 items-center">
                                    <span className="basis-auto bg-gray-400 rounded-full w-7 h-7"></span>
                                    <div className=" basis-5/6 col-span-11 ">
                                        <p className="text-gray-500 font-xs">Richard Jersey</p>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1 pt-1 md:block hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path></svg>
                            </div>
                        </a>
                        //  
                    }
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