import React from 'react'

const Subscription = () => {
    return (
        <div className='max-w-screen-sm mx-auto text-center lg:pr-5 min-h-[80vh] flex flex-col items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-32 h-32 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            <h3 className='font-bold text-xl lg:text-2xl lg:mt-5 mt-4 mb-1'> Don’t miss new videos</h3>
            <p className=''>Sign in to see updates from your favorite YouTube channels       </p>
            <a href="" className='cursor-pointer mt-5 text-blue-600 bg-gray-100 bg-opacity-50 border border-gray-200 px-6 py-2 rounded-full'>Sign in</a>
        </div>
    )
}

export default Subscription