import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {

  return (
    <div className='flex pt-4'>
      <Sidebar />
      <div className='basis-auto grow px-2'>
      <Outlet/>
      </div>
    </div>
  );
}

export default Body;
