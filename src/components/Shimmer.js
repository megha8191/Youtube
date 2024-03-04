import React from 'react'

export const SearchShimmer =()=>{
  return(
  <div className='w-full'> 
      {
        Array(4).fill().map((val, index) => {
          return <div className='lg:grid-cols-[360px,1fr,auto] grid-cols-[240px,1fr,auto] sm:grid w-full gap-4 mt-4' key={"sh"+index}>
          <div className='relative w-full'>
              <div className='shimmerBG bg-gray-300 rounded-lg  lg:h-52 md:h-40 sm:h-44 h-56  w-full '></div>
          </div>
          <div className='py-1'>
              <div className='shimmerBG bg-gray-300 my-1 w-5/6 h-6 '></div>
              <div className='shimmerBG bg-gray-300 mt-2 rounded w-4/6 h-5'></div>
          </div>
          <div className='basis-1 pt-1'></div>
        </div>
        })
      }
    </div>
  )
}

export const ShimmerCard = () => {
  return (
    <div className='p-2 w-full cursor-pointer'>
      <div className='shimmerBG rounded-lg bg-gray-300 w-auto h-44'></div>
      <div className='flex justify-start items-start mt-2'>
        <div className='shimmerBG bg-gray-300 rounded-full w-10 h-9 mt-2 mr-2'></div>
        <div className='flex flex-col items-start w-full'>
          <div className='shimmerBG bg-gray-300 my-1 rounded w-5/6 h-5'></div>
          <div className='shimmerBG bg-gray-300 my-1 rounded w-3/6 h-4'></div>
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