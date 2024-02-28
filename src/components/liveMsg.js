import React from 'react'

const LiveMsg = ({name,msg}) => {
  return (
    <div className="w-100 flex pt-3 gap-3">
    <span className="basis-auto bg-gray-400 rounded-full w-8 h-8"></span>
    <div className=" basis-5/6 col-span-11 ">
      <p className="font-semibold font-xs mb-0 text-black ">{name}</p>
      <p className="text-gray-500 font-xs mt-0">{msg} </p>
    </div>
  </div> 
  )
}

export default LiveMsg