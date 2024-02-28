
import React from 'react'



const commentsList = [
  { 
    text:"Lorem ipsum dolor sit amet, consectetur adip",
    username: 'megha',
    reply: [
      { 
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        username: 'megha',
        reply: [
          { 
            text:"Lorem ipsum dolor sit amet, consectetur adip",
            username: 'megha',
            reply: [
              { 
                text:"Lorem ipsum dolor sit amet, consectetur adip",
                username: 'megha',
                reply: [
                  { 
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    username: 'megha',
                    reply: [],
                  },
                  { 
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    username: 'megha',
                    reply: [],
                  },
                  { 
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    username: 'megha',
                    reply: [],
                  },
                  { 
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    username: 'megha',
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      { 
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        username: 'megha',
        reply: [],
      },
    ],
  },
  { 
    text:"Lorem ipsum dolor sit amet, consectetur adip",
    username: 'megha',
    reply: [],
  },
];

console.log(commentsList[1])

const Commentdiv = (info)=>{
  let {username,text,reply}= info.info;
  return(
    <div className='commentdiv mb-3'>
      <b>{username}</b>
      <p>{text}</p>
      {(reply.length)===0? "":
         reply.map(function(reply, index){
          return ( <div className='border-l-gray-700 border-l pl-5' key={index}>
           <Commentdiv info={reply}/>
           </div>
           )}
         )
      }
   </div>
  )
}

const Comments = () => {
  return (
    <div className='mt-5'>
      <b className='text-xl font-bold'>Comments</b>
      <div className=''>
       { commentsList.map(function(comment,index){
          return (<Commentdiv info ={comment} key={index} />)
        })}
      </div>
    </div>
  )
}

export default Comments