import React from 'react'

const Error = () => {
    return (
        <div class="min-h-screen flex items-center max-w-screen-lg py-5 mx-auto sm:px-4 px-3">
            <div className='relative z-6'>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" className='absolute z-0'/>
            <h1 class="my-2 text-gray-800 font-bold text-2xl relative z-6">
                Looks like you've found the
                doorway to the great nothing
            </h1>
            <p class="my-2 text-gray-800 relative z-6">Sorry about that! Please visit our hompage to get where you need to go.</p>
            <a href='/' class="relative z-6 lg:w-auto my-2  bg-black hover:bg-opacity-85 text-white py-3 px-5 text-sm rounded-full inline-block">Take me there!</a>
        </div>
        </div>

    )
}

export default Error