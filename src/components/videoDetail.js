import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { hideSidebar } from '../utils/appSlice';
import Comments from './comments';
import LiveChat from './liveChat';


const Videodetail = () => {

    const hii = () => dispatch(hideSidebar());
    const dispatch = useDispatch();
    const sidebar= document.getElementById('sidebar')

    useEffect(() => {
        hii();
    }, [])

    let [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    // console.log(videoId)

    

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