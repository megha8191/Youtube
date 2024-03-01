import React from 'react'

export const ShimmerCard = () => {
  return (
    <div className='p-2 w-full cursor-pointer'>
      <div className='shimmerBG rounded-lg bg-gray-300 w-auto h-44'></div>
      <div className='flex justify-start items-start mt-2'>
        <div className='shimmerBG bg-gray-300 rounded-full w-10 h-9 mt-2 mr-2'></div>
        <div className='flex flex-col items-start w-full'>
          <div className='shimmerBG bg-gray-300 my-1 w-full h-3'></div>
          <div className='shimmerBG bg-gray-300 my-1 w-1/3 h-2'></div>
          <div className='shimmerBG bg-gray-300 my-1 w-1/2 h-2'></div>
        </div>
      </div>
    </div>
  )
}

const Shimmer = () => {
  return (
    <div className='grid main-video-grid gap-x-4 gap-y-8 w-full'> 
      {
        Array(20).fill().map((val, index) => {
          return <ShimmerCard key={index} />
        })
      }
    </div>
  )
}

export default Shimmer;