
import React from 'react'


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


const Comments = (item)=>{
  console.log(item)
  const replies = item.info.replies;

  const com = item.info.snippet.topLevelComment.snippet;
  const {authorDisplayName,authorProfileImageUrl,textOriginal}= com;
  console.log(item.info)
  return(
    <div className='commentdiv mb-3'>
      <div class="w-100 flex pt-3 gap-3 mt-3">
            <img src={authorProfileImageUrl} class="basis-auto bg-gray-400 rounded-full w-9 h-9" alt="profle-img"/>
            <div class=" basis-5/6 col-span-11 ">
                <p class="font-semibold font-xs mb-0 text-black">{authorDisplayName}</p>
                <p class="text-gray-500 font-xs mt-0">{textOriginal}</p>
                <p className='text-blue-700'>{item.info.snippet.totalReplyCount} Replies</p>
            </div>
        </div>
      {(item.info.snippet.totalReplyCount)<=0? "":
        // <p>jsosi{item.info.replies.comments.length}</p>
         item.info.replies.comments.map(function(reply, index){
          return ( <div className='border-l-gray-700 border-l pl-6' key={index}>
           <Commentdiv info={reply}/>
           </div>
           )}
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