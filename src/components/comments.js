
import React, { useState } from 'react'


// const commentsList = [
//   { 
//     text:"Lorem ipsum dolor sit amet, consectetur adip",
//     username: 'megha',
//     reply: [
//       { 
//         text:"Lorem ipsum dolor sit amet, consectetur adip",
//         username: 'megha',
//         reply: [
//           { 
//             text:"Lorem ipsum dolor sit amet, consectetur adip",
//             username: 'megha',
//             reply: [
//               { 
//                 text:"Lorem ipsum dolor sit amet, consectetur adip",
//                 username: 'megha',
//                 reply: [
//                   { 
//                     text:"Lorem ipsum dolor sit amet, consectetur adip",
//                     username: 'megha',
//                     reply: [],
//                   },
//                   { 
//                     text:"Lorem ipsum dolor sit amet, consectetur adip",
//                     username: 'megha',
//                     reply: [],
//                   },
//                   { 
//                     text:"Lorem ipsum dolor sit amet, consectetur adip",
//                     username: 'megha',
//                     reply: [],
//                   },
//                   { 
//                     text:"Lorem ipsum dolor sit amet, consectetur adip",
//                     username: 'megha',
//                     reply: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       { 
//         text:"Lorem ipsum dolor sit amet, consectetur adip",
//         username: 'megha',
//         reply: [],
//       },
//     ],
//   },
//   { 
//     text:"Lorem ipsum dolor sit amet, consectetur adip",
//     username: 'megha',
//     reply: [],
//   },
// ];



const Comments = (item) => {
  const [toggleReply, setToggleReply] = useState(false)

  const repliesLength = item?.info?.snippet?.totalReplyCount;
  const topcomment = item.info.snippet.topLevelComment.snippet;
  const { authorDisplayName, authorProfileImageUrl, textOriginal,likeCount } = topcomment;
  return (
    <div className='commentdiv mb-3'>
      <div className="w-100 flex pt-3 sm:gap-3 gap-2 mt-3">
        <img src={authorProfileImageUrl} className="border border-gray-200 basis-auto bg-gray-400 rounded-full sm:w-9 sm:h-9 h-8 w-8" alt="profle-img" />
        <div className=" basis-5/6 col-span-11 ">
          <p className="font-[600] text-[13px] mb-0 text-black">{authorDisplayName}</p>
          <p className="text-black text-sm mt-0 line-clamp-6">{textOriginal}</p>
          <div className='flex gap-4 mt-1'>
            <span className='flex gap-1 text-sm items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>{(likeCount===0)?"":likeCount}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
            </svg>
          </div>
          {(repliesLength === 0) ? "" : <p className='text-blue-700 font-semibold text-sm cursor-pointer inline-flex gap-1 items-center mt-3' onClick={() => setToggleReply(!toggleReply)}>
            {item.info.snippet.totalReplyCount} Replies {(toggleReply) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 relative top-[1px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 relative top-[1px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            }</p>}
        </div>
      </div>
      {(repliesLength <= 0) ? "" : (
        item.info.replies.comments.map(function (reply, index) {
          const { textOriginal, authorDisplayName, authorProfileImageUrl,likeCount } = reply.snippet;
          return (
            <div className={(!toggleReply) ? "hidden" : "w-100 flex pt-3 sm:gap-3 gap-2 mt-3 pl-10"} key={reply.id}>
              <img src={authorProfileImageUrl} className="basis-auto bg-gray-400 rounded-full sm:w-9 sm:h-9 h-8 w-8" alt="profle-img" />
              <div className=" basis-5/6 col-span-11 ">
                <p className="font-[600] text-[13px] mb-0 text-black">{authorDisplayName}</p>
                <p className="text-black text-sm mt-0 line-clamp-6">{textOriginal}</p>
                <div className='flex gap-4 mt-1'>
                  <span className='flex gap-1 text-sm items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>{(likeCount===0)?"":likeCount}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                  </svg>
                </div>
              </div>
            </div>
          )
        }
        )
      )
      }
    </div>
  )
}

const Commentdiv = () => {
  return (
    <div className='mt-5'>
      <b className='text-xl font-bold'>Comments</b>
      <div className=''>

      </div>
    </div>
  )
}

export default Comments