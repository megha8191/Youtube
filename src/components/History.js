import React from 'react'

const History = () => {
  return (
    <div className='max-w-screen-sm mx-auto text-center lg:pr-5 min-h-[80vh] flex flex-col items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-32 h-32 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

       <h3 className='font-bold text-xl lg:text-2xl lg:mt-5 mt-4 mb-1'> Keep track of what you watch</h3>
        <p className=''>Watch history isn't viewable when signed out.  
         <a href="" className='cursor-pointer text-blue-600 ml-2'>Learn more</a>
       </p>
       <a href="" className='cursor-pointer mt-5 text-blue-600 bg-gray-100 bg-opacity-50 border border-gray-200 px-6 py-2 rounded-full'>Sign in</a>
    </div>
  )
}

export default History