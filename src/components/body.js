import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {

  return (
    <div className='flex pt-4 max-w-full overflow-x-hidden'>
      <Sidebar />
      <div className='basis-auto grow px-2 max-w-[2000px] mx-auto'>
      <Outlet/>
      </div>
    </div>
  );
}

export default Body;
